import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.services'

export async function handleGetAllProducts(req, res) {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);

  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export async function handleGetProductById(req, res) {
  const { id } = req.params;
  try {
    const getProduct = await getProductById(id);

    if (!getProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(getProduct);

  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleCreateProduct(req, res){
  const data = req.body;
  try {
    const product = await createProduct(data);
    return res.status(201).json(product);

  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export async function handleUpdateProduct(req, res) {
  const data =req.body;
  const { id }=req.params;
  try {
    const update= await updateProduct(id,data);
    return res.status(201).json(update);

  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteProduct(req, res) {
  const { id }=req.params;
  try {
    const product=await getProductById(id);

    if(!product){
      return res.status(404).json({message:"Product not found"});
    }

    //await product.remove();
    return res.status(200).json({message: "Product deleted"});

  } catch (error) {
    return res.status(500).json(error)
  }
}
