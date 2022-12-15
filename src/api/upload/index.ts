import { Router } from 'express';
import multer from 'multer';
import { uploadMultipleHandler,uploadSingleHandler } from './upload.controller';

const router = Router();
const upload = multer({ dest: './temp' })

router.post('/file', upload.single('file'), uploadSingleHandler)
router.post('/files', upload.array('files'), uploadMultipleHandler)

export default router ;
