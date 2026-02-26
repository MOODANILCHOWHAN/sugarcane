import mongoose from'mongoose';
import {Schema} from 'mongoose';
const tender= new Schema({

  name:{type:String,required:true},
  phoneNo:{type:Number, required:true},
  gangs:[{type: Schema.Types.ObjectId,ref:'gang'}],
  lorrys:[{types:Schema.Types.ObjectId, ref:'lorry'}],
  loads: [{types:Schema.Types.ObjectId, ref:'load'}]
})
const tenderModel = mongoose.model('tender',tender);

export default tenderModel;