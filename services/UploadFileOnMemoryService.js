import multer from 'multer';

const storage = multer.memoryStorage();
const UploadOnMemory = multer({
    storage,
    limits: {
        fileSize: process.env.MAX_FILE_SIZE_MB,
    },
});

export default UploadOnMemory;
