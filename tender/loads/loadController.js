import mongoose from 'mongoose';
import Lorry from '../lorry/lorryModel.js';
import Load from './loadModel.js';
import Gang from "../gangs/model/gang.js";
import Tender from "../tenders/tenderModel.js"

export const LoadControllers={
 addingLoad: async (req,res)=>{
    const session= await mongoose.startSession()
    try {
        // session.startTransaction();
        const { farmerName,gang,lorry,totalTons,kushi,pricePerTon,advance,
            batha,isKushiDistributed,tender } =req.body;
            console.log(req.body)
        const data=await new Load(req.body);
        data.save()

       await Lorry.findByIdAndUpdate(lorry,{$push:{loads:data._id}});
       
       await Gang.findByIdAndUpdate(gang, {$push : {loads:data._id}});
       
       await Tender.findByIdAndUpdate(tender,{$push:{loads:data._id}});
        
    //    await session.commitTransaction();
       
       return res.status(200).json({message:'load added sucessfully.'})
    } catch (error) {
        console.log(error)
        // await session.abortTransaction();
        return res.status(500).json({message:'Something went wrong',error:error});
    }
 }
}