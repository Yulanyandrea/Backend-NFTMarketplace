import Product from './product.model';

export function getAllProducts() {
  return Product.find()
}

export function getProductById(id) {
  return Product.findById(id)
}

export function createProduct(product) {
  return Product.create(product);
}

export function updateProduct(id, product) {
  const updateProduct=Product.findByIdAndUpdate(id, product, {new:true});
  return updateProduct;
}

export function deleteProduct(id) {
  const deleteProduct=Product.findByIdAndDelete(id);
  return deleteProduct;
}
