import { Router } from "express";
import brandController from "../controllers/brandController";

const router: Router = Router();

router.post("/", brandController.create);
router.get("/", brandController.getAll);

export default router;
