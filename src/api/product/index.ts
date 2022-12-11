import { Router } from 'express';

import {
  handleGetAllProducts,
  handleGetProductById,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} from './product.controller';

const router = Router();

router.get('/', handleGetAllProducts);
router.get('/:id', handleGetProductById);
router.post('/', handleCreateProduct);
router.patch('/:id', handleUpdateProduct);
router.delete('/:id', handleDeleteProduct);

export default router;
