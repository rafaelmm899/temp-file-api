import express from 'express';
import filesRoutes from './routes/filesRoutes.js';
import healthCheckRoutes from './routes/healthCheckRoutes.js';
import { RequestLog } from './middlewares/RequestLog.js';
import ExceptionHandler from './middlewares/ExceptionHandler.js';

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.use(express.json());
app.use(RequestLog);
app.use('/files', filesRoutes);
app.use('/health', healthCheckRoutes);
app.use(ExceptionHandler);

const serverRunningHandler = () => console.log(`Server running on port ${port}...`);

app.listen(port, serverRunningHandler());
