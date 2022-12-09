import {Router} from 'express';
import { handleAllGetUsers,
  handleGetUser,
  handleCreateUser ,
  handleUpdateUser,
  handleDeleteUser} from './user.controller';

const router=Router()

//RESFULL api

//get
router.get('/', handleAllGetUsers);

//get/api/users/:id
router.get('/:id', handleGetUser);

//post
router.post('/',handleCreateUser);

//patch
router.patch('/:id',handleUpdateUser);

//delete
router.delete('/:id',handleDeleteUser);

export default router;
