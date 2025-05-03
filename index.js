import express from 'express';
import filesRoutes from './routes/filesRoutes.js';
import { RequestLog } from './middlewares/RequestLog.js';
import ExceptionHandler from './middlewares/ExceptionHandler.js';
import cron from 'node-cron';
import { FileRemoverService } from './services/FileRemoverService.js';
import AuthChecker from './middlewares/AuthChecker.js';
import ServerStatusRoutes from './routes/ServerStatusRoutes.js';

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.use(express.json());
app.use(RequestLog);
app.use(AuthChecker);
app.use('/files', filesRoutes);
app.use('/status', ServerStatusRoutes);
app.use(ExceptionHandler);

cron.schedule('* * * * *', function () {
    FileRemoverService();
});

const serverRunningHandler = () => console.log(`Server running on port ${port}...`);

app.listen(port, serverRunningHandler());
