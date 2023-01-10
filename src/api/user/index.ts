import {Router} from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';

import { handleAllGetUsers,
  handleGetUser,
  handleCreateUser ,
  handleUpdateUser,
  handleDeleteUser
} from './user.controller';

const router=Router()

//RESFULL api

//get
router.get('/', handleAllGetUsers);

//get/api/users/:id
router.get('/:id', handleGetUser);

//post
router.post('/', handleCreateUser);

//patch
router.patch('/:id', isAuthenticated, hasRole(['ADMIN', 'USER']), handleUpdateUser);

//delete
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteUser);


export default router;
