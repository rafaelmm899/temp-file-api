import express from 'express';
import upload from '../services/UploadFileOnMemoryService.js';
import { existsSync, readdirSync, unlink, writeFile } from 'node:fs';
import NotFoundException from '../exceptions/NotFoundException.js';
import ValidationException from '../exceptions/ValidationException.js';
import UploadFileSchema from '../schemas/UploadFileSchema.js';
const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    const { error } = UploadFileSchema.validate(req.file);
    if (error) {
        throw new ValidationException(error.message);
    }

    writeFile(`uploads/${req.file.originalname}`, req.file.buffer, (err) => {
        if (err) {
            throw new Error('Failed to save file');
        }

        res.send('File uploaded successfully');
    });
});

router.delete('/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = `./uploads/${filename}`;
    if (!existsSync(filePath)) {
        throw new NotFoundException('File not found for deletion');
    }
    unlink(filePath, (err) => {
        if (err) {
            throw new Error('Failed to delete file');
        }
    });
    res.send('File deleted successfully');
});

router.get('/:filename', (req, res) => {
    const { filename } = req.params;
    if (!existsSync(`./uploads/${filename}`)) {
        throw new NotFoundException('File not found');
    }
    res.download(`./uploads/${filename}`);
});

router.get('/', (req, res) => {
    const files = [];
    const filesInFolder = readdirSync('./uploads');
    filesInFolder.forEach((file) => {
        files.push({ name: file });
    });
    res.send(files);
});

export default router;
