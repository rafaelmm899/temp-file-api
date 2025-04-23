import express from 'express';
import upload from './services/UploadFileService.js';
import { unlink, existsSync } from 'fs';

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.delete('/files/:filename', (req, res) => {
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

const serverRunningHandler = () => console.log(`Server running on port ${port}...`);

app.listen(port, serverRunningHandler());
