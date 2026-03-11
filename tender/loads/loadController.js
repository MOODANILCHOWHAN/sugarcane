import mongoose from 'mongoose';
import Lorry from '../lorry/lorryModel.js';
import Load from './loadModel.js';
import Gang from "../gangs/model/gang.js";
import Tender from "../tenders/tenderModel.js"

export const LoadControllers={
 addingLoad: async (req,res)=>{
    // const session= await mongoose.startSession()
    try {
        // session.startTransaction();
        const { farmerName,gang,lorry,totalTons,kushi,pricePerTon,advance,
            batha,isKushiDistributed,tender } =req.body;
            console.log(req.body)
        const data=await new Load(req.body);
        data.save()

       await Lorry.findByIdAndUpdate(lorry,
        {
            $push:{loads:data._id},
            $inc:{totalTons:totalTons}
        }
        );
       
       await Gang.findByIdAndUpdate(gang, {
        $push : {loads:data._id},
        $inc:{totalTonsWorked:totalTons}
    });
       
       await Tender.findByIdAndUpdate(tender,{$push:{loads:data._id}});
        
    //    await session.commitTransaction();
       
       return res.status(200).json({message:'load added sucessfully.'})
    } catch (error) {
        console.log(error)
        // await session.abortTransaction();
        return res.status(500).json({message:'Something went wrong',error:error});
    }
 },
 getLoads: async(req,res)=>{
    try {
        const page=req.params.page;
        const value=10
        // let data= Load.find().skip((page-1)*value).limit(value);
        let data = await Load.aggrigate([
            {$skip:(page-1)*value},
            {$limit:value},
            {
                $lookup:{
                    from:'Gang',
                    localField:"gang",
                    foreignField:"_id",
                    as:"gangDetails"
                }
            },
            {
                $lookUp :{
                    from : "Lorry",
                    localField :"lorry",
                    foreignField:"_id",
                    as:"lorryDetails"
                }
            },
            {
                $lookUp : {
                    from : "Tender",
                    localField:"tender",
                    foreignField:"_id",
                    as:"tenderDetails"
                }
            },
            {
                $project: {
                    _id: 1,
                    farmerName: 1,
                    totalTons: 1,
                    kushi: 1,
                    pricePerTon: 1,
                    advance: 1,
                    batha: 1,
                    isKushiDistributed: 1,
                    "tenderDetails.name": 1,
                    "gangDetails.name":1,
                    "gangDetails.mukadam":1,
                    "lorryDetails.lorryNo":1,
                    "lorryDetails.name":1
                }

            }
        ])
        if(!data){
          return  res.status(404).send({message:"Loads are not found"});

        }
        return res.status(200).json({data:data,message:"Load details"})
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
 },
 getLoadsById:async(req,res)=>{
    try {
        const id=req.params.id;
        // const data = await Load.aggregate([
        //     {$match : {"_id": new mongoose.Types.ObjectId(id)}}
        // ])
        const data= await Load.findById(id)
        .populate("Tender","name")
        .populate("Gang","name mukadam")
        .populate("Lorry","name lorryNo");
        if(!data){
            return res.status(404).send({message:"No loads available for given id"});
        }

        return res.status(200).json({data:data});
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
 },
 deleteLoad:async (req,res)=>{
    try {
        const id=req.params.id;
        const data= await Load.findByIdAndUpdate(id,{
            $set:{isDeleted:true}
        });
        if(!data){
            res.status(404).send({message:"Load is not found."})
        }
        await Tender.findByIdAndUpdate(tender,{
            $pull :{loads:id}
        });
        await Lorry.findByIdAndUpdate(lorry,{
            $pull :{loads:id}
        });
        await Gang.findByIdAndUpdate(gang,{
            $pull:{load:id}
        });

        res.status(200).json({message:"Load deleted sucessfully"})
    } catch (error) {
        res.status(500).send({message:"Something went wrong."})
    }
 }
}