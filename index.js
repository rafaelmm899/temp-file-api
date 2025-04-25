import express from 'express';
import filesRoutes from './routes/filesRoutes.js';
import healthCheckRoutes from './routes/healthCheckRoutes.js';

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.use('/files', filesRoutes);
app.use('/health', healthCheckRoutes);

const serverRunningHandler = () => console.log(`Server running on port ${port}...`);

app.listen(port, serverRunningHandler());
