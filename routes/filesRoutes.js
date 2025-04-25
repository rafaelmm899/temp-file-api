import express from 'express';
import upload from '../services/UploadFileService.js';
import { existsSync, readdirSync, unlink } from 'node:fs';
const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

router.delete('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = `./uploads/${filename}`;
    if (!existsSync(filePath)) {
        return res.status(404).send('File not found for deletion');
    }

    unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting file');
        }
    });
    res.send('File deleted successfully');
});

router.get('/:filename', (req, res) => {
    const { filename } = req.params;
    if (!existsSync(`./uploads/${filename}`)) {
        return res.status(404).send('File not found');
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
