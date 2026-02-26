import mongoose from 'mongoose';
import Schema from mongoose
import { Decimal128 } from 'bson';

const load= new Schema({

  farmerName :{type:String,required:true},
  gangName:{type:Schema.Types.ObjectId,ref:'gang'},
  lorryDetails:{type:Schema.Types.ObjectId, ref:'lorry'},
  totalTons:{type:Number,required:true,default:0},
  kushi:{type:Number, required:true},
  pricePerTon:{type:Number,required:true},
  adavance:{type:Number,required:true},
  isKushiDistrubuted:{type:Boolean,required:true,default:false},

})

const loadModel= mongoose.model('load',load);

export default loadModel;