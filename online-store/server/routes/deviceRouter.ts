import { Router } from "express";
import deviceController from "../controllers/deviceController";

const router: Router = Router();

router.get("/", deviceController.getAll);
router.post("/", deviceController.create);
router.get("/:id", deviceController.getOne);

export default router;
