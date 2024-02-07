import { Router } from "express";
import brandController from "../controllers/brandController";
import checkRole from "../middleware/checkRoleMiddleware";

const router: Router = Router();

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll);

export default router;
