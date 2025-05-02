import ValidationException from '../exceptions/ValidationException.js';
import UploadFileSchema from '../schemas/UploadFileSchema.js';
import { existsSync, readdirSync, unlink, writeFile } from 'node:fs';
import { ApiTransformer } from '../services/ApiTransformer.js';
import NotFoundException from '../exceptions/NotFoundException.js';

export class FileController {
    constructor() {
        this.uploadFolder = process.env.UPLOAD_FOLDER;
    }

    upload = async (req, res) => {
        if (!req.file) {
            throw new ValidationException('File is required');
        }

        const { error } = UploadFileSchema.validate(req.file);
        if (error) {
            throw new ValidationException(error.message);
        }

        writeFile(`${this.uploadFolder}/${req.file.originalname}`, req.file.buffer, (err) => {
            if (err) {
                throw new Error('Failed to save file');
            }

            ApiTransformer(res, {
                message: 'File uploaded successfully',
            });
        });
    };

    deleteFile = async (req, res) => {
        const { filename } = req.params;
        const filePath = `${this.uploadFolder}/${filename}`;
        if (!existsSync(filePath)) {
            throw new NotFoundException('File not found for deletion');
        }
        unlink(filePath, (err) => {
            if (err) {
                throw new Error('Failed to delete file');
            }
        });

        ApiTransformer(res, {
            message: 'File deleted successfully',
        });
    };

    downloadFile = async (req, res) => {
        const { filename } = req.params;
        if (!existsSync(`${this.uploadFolder}/${filename}`)) {
            throw new NotFoundException('File not found');
        }
        res.download(`${this.uploadFolder}/${filename}`);
    };

    getFiles = async (req, res) => {
        const files = [];
        const filesInFolder = readdirSync(this.uploadFolder);
        filesInFolder.forEach((file) => {
            files.push({ name: file });
        });
        res.send(files);
    };
}
