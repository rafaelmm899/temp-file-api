import express from 'express';

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const serverRunningHandler = () => console.log(`Server running on port ${port}...`);

app.listen(port, serverRunningHandler());
