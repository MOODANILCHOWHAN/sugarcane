import mongoose from 'mongoose';
import {Schema} from 'mongoose';
const gang= new Schema({
  name:{type:String, required:true},
  phoneNumber:{type:Number},
  InitailAmount:{type:Number},
  expensives:{type:Number},
  gang: [{ type: Schema.Types.ObjectId, ref: 'Gang' }],
})
const gangDetails= mongoose.model('GangDetails',gang);
export default gangDetails;