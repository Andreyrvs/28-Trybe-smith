import express from 'express';

const app = express();

app.use(express.json());
console.log('Inicio');

export default app;
