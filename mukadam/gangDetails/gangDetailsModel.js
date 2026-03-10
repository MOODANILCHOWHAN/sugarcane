// 
import mongoose from "mongoose";

const { Schema } = mongoose;

const gangDetailsSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String },
    initialAmount: { type: Number, default: 0 },
    expenses: { type: Number, default: 0 },
    gang: { type: Schema.Types.ObjectId, ref: "Gang" },
    loads:[{type:String}]
  },
  { timestamps: true }
);

export default mongoose.model("GangDetails", gangDetailsSchema);