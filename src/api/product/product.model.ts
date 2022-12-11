import { Schema, model, Document } from 'mongoose';

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  createdBy: string;
  owner: string;
  images: string;
  size: string;
  categories: string;
  state: string;
  likes: string;
  bids: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
  createdBy: {
    // type: Schema.Types.ObjectId,
    // ref: 'User',
    // required: true,
    type: String,
  },
  owner: {
    // type: Schema.Types.ObjectId,
    // ref: 'User',
    type: String,
  },
  images: {
    type: Array,
  },
  size: {
    type: String,
  },
  categories: {
    type: Array,
    uppercase: true,
  },
  state: {
    type: String,
    enum: ['ONSALE', 'INSTANTSALE', 'LOCK'],
    default: 'ONSALE',
  },
  likes: {
    type: Array,
  },
  bids: {
    type: Object,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Product = model<ProductDocument>('Product', ProductSchema);

export default Product;
