import express from 'express';
import ProductRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());
console.log('Inicio#');
app.use('/products', ProductRoutes);

export default app;
