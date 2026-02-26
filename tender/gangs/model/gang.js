// import mongoose from 'mongoose';
// import { Schema } from 'mongoose';
// const gang = new Schema({
//   name: { type: String, required: true },
//   mukadam: { type: String, required: true },
//   phoneNumber: { type: String, required: true },

//   ratePerTon: { type: Number, required: true },
//   advanceReceived: { type: Number, default: 0 },

//   totalTonsWorked: { type: Number, default: 0 },

//   members: [{ type: Schema.Types.ObjectId, ref: "GangDetails" }],
//   tender: { type: Schema.Types.ObjectId, ref: "Tender" }
// });

// const GangModel = mongoose.model('Gang', gang);
// export default GangModel;

import mongoose from "mongoose";

const { Schema } = mongoose;

const gangSchema = new Schema(
  {
    name: { type: String, required: true },
    mukadam: { type: String, required: true },
    phoneNumber: { type: String, required: true },

    ratePerTon: { type: Number, required: true },
    advanceReceived: { type: Number, default: 0 },
    totalTonsWorked: { type: Number, default: 0 },

    members: [{ type: Schema.Types.ObjectId, ref: "GangDetails" }],
    tender: { type: Schema.Types.ObjectId, ref: "Tender" },
  },
  { timestamps: true }
);

export default mongoose.model("Gang", gangSchema);