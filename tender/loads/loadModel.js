// import mongoose from 'mongoose';
// import {Schema} from 'mongoose'
// import { Decimal128 } from 'bson';

// const load= new Schema({

//   farmerName :{type:String,required:true},
//   gangName:{type:Schema.Types.ObjectId,ref:'Gang'},
//   lorryDetails:{type:Schema.Types.ObjectId, ref:'Lorry'},
//   totalTons:{type:Number,required:true,default:0},
//   kushi:{type:Number, required:true},
//   pricePerTon:{type:Number,required:true},
//   adavance:{type:Number,required:true},
//   isKushiDistrubuted:{type:Boolean,required:true,default:false},

// })

// const loadModel= mongoose.model('Load',load);

// export default loadModel;
import mongoose from "mongoose";

const { Schema } = mongoose;

const loadSchema = new Schema(
  {
    farmerName: { type: String, required: true ,index:true},
    gang: { type: Schema.Types.ObjectId, ref: "Gang", required: true },
    lorry: { type: Schema.Types.ObjectId, ref: "Lorry", required: true },
    tender:{type:Schema.Types.ObjectId,ref:'Tender',required:true},
    totalTons: { type: Number, required: true },
    kushi: { type: Number, required: true },
    pricePerTon: { type: Number, required: true },
    advance: { type: Number, required: true },
    batha:{type:Number,required:true},
    isKushiDistributed: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

loadSchema.index({farmerName:1});
loadSchema.index({gang:1});
loadSchema.index({lorry:1});
loadSchema.index({tender:1});

export default mongoose.model("Load", loadSchema);