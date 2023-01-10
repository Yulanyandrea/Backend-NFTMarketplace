import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';

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
router.post('/', isAuthenticated, hasRole(['ADMIN', 'USER']), handleCreateProduct);
router.patch('/:id', isAuthenticated, hasRole(['ADMIN', 'USER']), handleUpdateProduct);
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteProduct);

export default router;
