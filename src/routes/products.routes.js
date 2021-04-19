import { Router } from 'express';
import * as productsCtrl from '../controllers/products.controllers';
const router = Router();

router.post('/', productsCtrl.createProducts);

router.get('/', productsCtrl.getsProducts);

router.get('/:productId', productsCtrl.getsProductById);

router.put('/:productId', productsCtrl.UpdateProductById);

router.delete('/:productId', productsCtrl.DeleteProductById);

export default router;