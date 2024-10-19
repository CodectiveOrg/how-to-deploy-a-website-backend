import express from 'express';

const PORT = 5000;

async function main(): Promise<void> {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello, friend!');
    });

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

main().then();
