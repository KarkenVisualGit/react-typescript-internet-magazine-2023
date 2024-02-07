import ApiError from "../error/ApiError";
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
  user?: JwtPayload;
}

export default function (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
      if (typeof decoded === "object") {
        req.user = decoded;
      } else {
        return res.status(401).send("Invalid token format");
      }
      next();
    } catch (error) {
      res.status(401).send("Not authorized");
    }
  } catch (e) {
    if (e instanceof Error) {
      res.status(401).json({ message: "User is not authorized" });
    } else {
      next(ApiError.badRequest("An unexpected error occurred"));
    }
  }
}
