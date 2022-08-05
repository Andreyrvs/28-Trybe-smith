import express from 'express';
import ProductRoutes from './routes/productRoutes';
import UserRoutes from './routes/userRoutes';
import OrderRoutes from './routes/ordersRouter';

const app = express();

app.use(express.json());
console.log('Inicio#');
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);

export default app;
