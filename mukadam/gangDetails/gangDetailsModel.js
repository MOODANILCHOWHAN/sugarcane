import mongoose from 'mongoose';
import {Schema} from mongoose
const gang= new Schema({
  name:{type:String, required:true},
  phoneNumber:{type:Number},
  InitailAmount:{type:Number},
  expensives:{type:Number},
  gang: [{ type: Schema.Types.ObjectId, ref: 'gang' }],
})
const gangDetails= mongoose.model('gangDetails',gang);
export default gangDetails;