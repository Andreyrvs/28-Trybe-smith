import express from 'express';
import ProductRoutes from './routes/productRoutes';
import UserRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
console.log('Inicio#');
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);

export default app;
