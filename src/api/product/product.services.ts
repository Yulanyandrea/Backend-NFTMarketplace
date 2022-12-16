import Product, { ProductDocument } from './product.model';
import { DocumentDefinition } from "mongoose";

export function getAllProducts() {
  return Product.find({})
}

export function getProductById(id:string) {
  return Product.findById(id).populate({path:'createdBy', select:'firstname lastname location'})
}

export function createProduct(product:DocumentDefinition<Omit<ProductDocument,'createdAt'| 'updateAt'>>) {
  return Product.create(product);
}

export function updateProduct(id:string, product:DocumentDefinition<Omit<ProductDocument,'createdAt'| 'updateAt'>>) {
  const updateProduct=Product.findByIdAndUpdate(id, product, {new:true});
  return updateProduct;
}

export function deleteProduct(id:string) {
  const deleteProduct=Product.findByIdAndDelete(id);
  return deleteProduct;
}
