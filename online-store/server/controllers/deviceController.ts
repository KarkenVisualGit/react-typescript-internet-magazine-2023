import { v4 } from "uuid";
import path from "path";
import { Request, Response, NextFunction } from "express";
import { Device, DeviceInfo } from "../models/models";
import ApiError from "../error/ApiError";

class DeviceController {
  /**
   * Creates a new device.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @returns {Promise<Response|void>}
   */
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      if (!req.files || !req.files.img) {
        throw ApiError.badRequest("No image file uploaded");
      }
      const img = req.files.img;

      if (Array.isArray(img)) {
        throw ApiError.badRequest("Multiple files upload not supported");
      }
      console.log("UUid", v4);
      let fileName = v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      /*  if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            } */

      return res.json(device);
    } catch (e) {
      if (e instanceof Error) {
        next(ApiError.badRequest(e.message));
      } else {
        next(ApiError.badRequest("An unexpected error occurred"));
      }
    }
  }

  async getAll(req: Request, res: Response) {}

  async getOne(req: Request, res: Response) {}
}

export default new DeviceController();
