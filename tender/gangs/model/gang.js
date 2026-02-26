import mongoose from 'mongoose';
const { Schema } = mongoose;
const gang = new Schema({
  name: { type: String, required: true },
  mukadam: { type: String, required: true },
  phoneNumber: { type: Number, required: true, maxLength: 10, minLength: 10 },
  totalAmount: { type: Number, required: true },
  reason: { type: String },
  pricePerTon: { type: String },
  people: [{ type: Schema.Types.ObjectId, ref: 'gangDetails' }],
});

const GangModel = mongoose.model('gang', gang);
export default GangModel;
