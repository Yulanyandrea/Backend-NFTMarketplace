import {Router} from 'express';
import  {handlePayment}  from './payment.controller';
import { isAuthenticated, hasRole } from '../../auth/auth.services';

const router= Router();

router.post('/', isAuthenticated, hasRole(['ADMIN', 'USER']), handlePayment )

export default router;
