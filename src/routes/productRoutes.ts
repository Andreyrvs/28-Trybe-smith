import { Router } from 'express';
import ProducController from '../controllers/productController';

const router = Router();

const productController = new ProducController();

router.post('/', productController.create);

export default router;