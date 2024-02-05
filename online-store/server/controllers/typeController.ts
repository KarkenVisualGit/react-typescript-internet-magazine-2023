import { Request, Response } from "express";
import { Type } from "../models/models";
import ApiError from "../error/ApiError";

class TypeController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (error) {
      if (error instanceof ApiError) {
        return res.status(error.status).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new TypeController();
