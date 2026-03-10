import mongoose from 'mongoose';
import lorrySchema from '../lorry/lorryModel.js';
import loadSchema from './loadModel.js';
import gangSchema from "../gangs/model/gang.js";
import tenderSchema from "../tenders/tenderModel.js"
export const Load={
 addingLoad: async (req,res)=>{
    const session= await mongoose.startSession()
    try {
        session.startTransaction();
        const { farmerName,gang,lorry,totalTons,kushi,pricePerTon,advance,
            batha,isKushiDistributed,tender } =req.body;
            console.log(req.body)
        const data=await new loadSchema(req.body);
        data.save({session})

       await lorrySchema.findByIdAndUpdate(lorry,{$push:{loads:data._id}},{session});
       
       await gangSchema.findByIdAndUpdate(gand, {$push : {loads:data._id}},{session});
       
       await tenderSchema.findByIdAndUpdate(tender,{$push:{loads:data._id}},{session});
        
       await session.commitTransaction();
       
       return res.status(200).json({message:'load added sucessfully.'})
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return res.status.json({message:'Something went wrong',error:error});
    }
 }
}