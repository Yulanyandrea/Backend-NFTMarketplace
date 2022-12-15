import { Schema, model, Document } from 'mongoose';

export interface PaymentDocument extends Document {
  refId: string;
  description: string;
  value: number;
  currency: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema(
  {
    refId: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      uppercase: true,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      trim: true,
      uppercase: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Payment = model<PaymentDocument>('Payment', PaymentSchema);

export default Payment;
