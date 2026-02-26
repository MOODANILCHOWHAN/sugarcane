import tenderModel from './tenderModel.js';
const tenderController={
    addTender:async (req,res)=>{
        try {
            const body=req.body;
        const data= new tenderModel(body);
        data.save();
        return res.status(200).json({message:"data saved",data:data})
        } catch (error) {
            return res.status(500).json({message:"something went wrong"})
        }
        

    }
}

export default tenderController;