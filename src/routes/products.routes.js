import { Router } from 'express';
import * as productsCtrl from '../controllers/products.controllers';
const router = Router();

router.post('/', productsCtrl.createProducts);

router.get('/', productsCtrl.getsProducts);

router.get('/:productsId', productsCtrl.getsProductById);

router.put('/:productsId', productsCtrl.UpdateProductById);

router.delete('/:productsId', productsCtrl.DeleteProductById);




export default router;