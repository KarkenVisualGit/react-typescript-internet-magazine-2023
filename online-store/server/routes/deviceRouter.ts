import { Router } from "express";
import deviceController from "../controllers/deviceController";
import checkRole from "../middleware/checkRoleMiddleware";

const router: Router = Router();

router.get("/", deviceController.getAll);
router.post("/", checkRole("ADMIN"), deviceController.create);
router.get("/:id", deviceController.getOne);

export default router;
