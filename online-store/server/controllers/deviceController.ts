import { v4 } from "uuid";
import path from "path";
import { Request, Response, NextFunction } from "express";
import { WhereOptions } from "sequelize";
import { Device, IDeviceAttributes, DeviceInfo } from "../models/models";
import ApiError from "../error/ApiError";

interface IDeviceInfoParsed {
  title: string;
  description: string;
}

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
      let fileName = v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info) as IDeviceInfoParsed[];
        info.forEach((i: IDeviceInfoParsed) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (e) {
      if (e instanceof Error) {
        next(ApiError.badRequest(e.message));
      } else {
        next(ApiError.badRequest("An unexpected error occurred"));
      }
    }
  }

  async getAll(req: Request, res: Response): Promise<Response | void> {
    let whereCondition: WhereOptions<IDeviceAttributes> = {};
    // const { brandId, typeId } = req.query;
    const brandId = req.query.brandId ? Number(req.query.brandId) : null;
    const typeId = req.query.typeId ? Number(req.query.typeId) : null;
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 9;
    let offset = page * limit - limit;

    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

export default new DeviceController();
