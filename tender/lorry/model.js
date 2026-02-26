import mongoose from "mongoose";
import {Schema} from mongoose;
const lorry= new Schema({
  name:{type:String,required:true},
  lorryNo:{type:String,required:true},
  phoneNumber:{type:Number,required:true},
  totalAmount:{type:Number,required:true},
  batha :{type:Number,required:true},
  totalTons:{type:Number,required:true,default:0}
})

const LorryModel= mongoose.model('Lorry',lorry);
export default LorryModel;