import express from 'express';
import cors from 'cors';

const PORT = 5000;

async function main(): Promise<void> {
    const app = express();

    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Hello, server!');
    });

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

main().then();
