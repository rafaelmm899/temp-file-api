import express from 'express';
import upload from '../services/UploadFileOnMemoryService.js';
import { FileController } from '../controllers/FileController.js';
const router = express.Router();

router.post('/upload', upload.single('file'), new FileController().upload);
router.delete('/:filename', new FileController().deleteFile);
router.get('/:filename', new FileController().downloadFile);
router.get('/', new FileController().getFiles);

export default router;
