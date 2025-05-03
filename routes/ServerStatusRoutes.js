import express from 'express';
import { ServerStatusController } from '../controllers/ServerStatusController.js';
const router = express.Router();

router.get('/', new ServerStatusController().getStatus);

export default router;
