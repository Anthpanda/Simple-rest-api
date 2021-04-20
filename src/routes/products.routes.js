import { Router } from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controllers';
import {authJwt} from '../middlewares';


router.post('/',[authJwt.verifyToken, authJwt.isModerador], productsCtrl.createProducts);

router.get('/', productsCtrl.getsProducts);

router.get('/:productId', productsCtrl.getsProductById);

router.put('/:productId', productsCtrl.UpdateProductById);

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.DeleteProductById);

export default router;