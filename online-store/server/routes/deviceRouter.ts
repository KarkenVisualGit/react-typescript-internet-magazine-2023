import { Router } from "express";
import deviceController from "../controllers/deviceController";

const router: Router = Router();

router.post("/", deviceController.getAll);
router.get("/", deviceController.create);
router.get("/:id", deviceController.getOne);

export default router;
