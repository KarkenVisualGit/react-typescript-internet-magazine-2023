import { Request, Response } from "express";
import { Brand } from "../models/models";
import ApiError from "../error/ApiError";

class BrandController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
      if (error instanceof ApiError) {
        return res.status(error.status).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new BrandController();
