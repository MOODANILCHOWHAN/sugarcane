// import mongoose from'mongoose';
// import {Schema} from 'mongoose';
// import loadModel from '../loads/loadModel';
// const tender= new Schema({

//   name:{type:String,required:true},
//   phoneNo:{type:Number, required:true},
//   gangs:[{type: Schema.Types.ObjectId,ref:"Gang"}],
//   lorries: [{ type: Schema.Types.ObjectId, ref: "Lorry" }],
//   loads: [{type:Schema.Types.ObjectId, ref:"Load"}]
// })
// const tenderModel = mongoose.model('Tender',tender);

// export default tenderModel;
import mongoose from "mongoose";

const { Schema } = mongoose;

const tenderSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNo: { type: String, required: true },

    gangs: [{ type: Schema.Types.ObjectId, ref: "Gang" }],
    lorries: [{ type: Schema.Types.ObjectId, ref: "Lorry" }],
    loads: [{ type: Schema.Types.ObjectId, ref: "Load" }],
  },
  { timestamps: true }
);

export default mongoose.model("Tender", tenderSchema);