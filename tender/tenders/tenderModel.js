import mongoose from'mongoose';
import {Schema} from 'mongoose';
const tender= new Schema({

  name:{type:String,required:true},
  phoneNo:{type:Number, required:true},
  gangs:[{type: Schema.Types.ObjectId,ref:"Gang"}],
  lorries: [{ type: Schema.Types.ObjectId, ref: "Lorry" }],
  loads: [{types:Schema.Types.ObjectId, ref:"Load"}]
})
const tenderModel = mongoose.model('Tender',tender);

export default tenderModel;