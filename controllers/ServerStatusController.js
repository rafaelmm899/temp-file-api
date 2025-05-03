import { ApiTransformer } from '../services/ApiTransformer.js';
import os from 'node:os';

export class ServerStatusController {
    getStatus = (req, res) => {
        ApiTransformer(res, {
            platform: os.platform(),
            arch: os.arch(),
            osVersion: os.version(),
            uptime: process.uptime(),
        });
    };
}
