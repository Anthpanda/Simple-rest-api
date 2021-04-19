import { Router } from 'express';
const router = Router();

import * as authCrtl from '../controllers/auth.controller';

router.post('/singup', authCrtl.singUp);

router.post('/singin', authCrtl.singin);

export default router;