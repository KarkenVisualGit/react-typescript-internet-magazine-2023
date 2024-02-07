import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, Basket } from "../models/models";
import { IUserAttributes } from "../models/models";

interface RequestWithUser extends Request {
  user?: IUserAttributes;
}

const generateJwt = (id: number, email: string, role: string): string => {
  if (typeof process.env.SECRET_KEY === "undefined") {
    throw new Error("SECRET_KEY is not defined");
  }
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Unvalid email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Such user is already exist"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    if (typeof user.id === "undefined" || typeof user.role === "undefined") {
      throw new Error("User ID or Role is undefined");
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Such user cannot exist"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Password mismatch"));
    }
    if (typeof user.id === "undefined" || typeof user.role === "undefined") {
      throw new Error("User ID or Role is undefined");
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }
  async check(req: RequestWithUser, res: Response, next: NextFunction) {
    if (!req.user || !req.user.id || !req.user.role) {
      return next(new Error("User details not found in request"));
    }
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

export default new UserController();
