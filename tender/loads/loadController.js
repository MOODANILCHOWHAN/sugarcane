import mongoose from 'mongoose';
import lorrySchema from '../lorry/lorryModel.js'
export const Load={
 addingLoad: async (req,res)=>{
    const session= await mongoose.startSession()
    try {
        session.startTransaction();
        const { farmerName,gang,lorry,totalTons,kushi,pricePerTon,advance,
            batha,isKushiDistributed,tender } =req.body;
        const data=await new loadSchema(req.body);
        data.save({session})
       await lorrySchema.findByIdAndUpdate(lorry._id,data._id,session);
        await gangSchema.findByIdAndUpdate(gand._id,data._id,session);
        await tenderSchema.findByIdAndUpdate(tender._id,data._id);
        await session.commitTransaction();
       return res.status.json({message:'load added sucessfully.'})
    } catch (error) {
        await session.abortTransaction();
        return res.status.json({message:'Something went wrong',error:error});
    }
 }
}