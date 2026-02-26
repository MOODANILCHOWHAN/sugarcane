import tenderController from "./tenderController.js";
import { Router } from "express";

const router= Router();

router.post("/addTender",tenderController.addTender);
router.get("/getTender/:id",tenderController.getTender);
router.get("/test",async (req,res)=>{
return res.status(200).json({message:'tender is working'});
})
export default router;