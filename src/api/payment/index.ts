import {Router} from 'express';
import  {handlePayment}  from './payment.controller';

const router= Router();

router.post('/',handlePayment )

export default router;
