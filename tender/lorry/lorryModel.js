// import mongoose from "mongoose";
// import {Schema} from 'mongoose';
// const lorry= new Schema({
//   name:{type:String,required:true},
//   lorryNo:{type:String,required:true},
//   phoneNumber:{type:Number,required:true},
//   totalAmount:{type:Number,required:true},
//   batha :{type:Number,required:true},
//   totalTons:{type:Number,required:true,default:0},
//   tender: { type: Schema.Types.ObjectId, ref: "Tender" }
// })

// const LorryModel= mongoose.model('Lorry',lorry);
// export default LorryModel;

import mongoose from "mongoose";

const { Schema } = mongoose;

const lorrySchema = new Schema(
  {
    name: { type: String, required: true },
    lorryNo: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    pricePerTon:{type:Number,required:true},
    batha: { type: Number, required: true },
    totalTons: { type: Number, default: 0 },
    status:{type:String},
    loads:[{type:String}],
    tender: { type: Schema.Types.ObjectId, ref: "Tender" },
  },
  { timestamps: true }
);

// setting the virtual field
// lorrySchema.virtual("totalAmount").get(function(){
//   return this.totalTons * this.pricePerTon
// })
// // enabling virtual in output
// lorrySchema.set("toJSON",{virtuals:true});
// lorrySchema.set("toObject",{virtuals:true});
export default mongoose.model("Lorry", lorrySchema);