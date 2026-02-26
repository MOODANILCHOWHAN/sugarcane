import tenderController from "./tenderController.js";
import { Router } from "express";

const router= Router();

router.post("/add",tenderController.addTender);

export default router;