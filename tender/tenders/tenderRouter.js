import tenderController from "./tenderController.js";
import { Router } from "express";

const router= Router();

router.post("/addTender",tenderController.addTender);
router.get("/getTender/:id",tenderController.getTender)
export default router;