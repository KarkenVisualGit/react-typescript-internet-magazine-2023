import ApiError from "../error/ApiError";
import { Request, Response, NextFunction } from "express";

export default function (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "An unexpected error occurred" });
}
