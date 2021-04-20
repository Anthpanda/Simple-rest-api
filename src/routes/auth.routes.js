import { Router } from 'express';
const router = Router();

import * as authCrtl from '../controllers/auth.controller';
import {verifySignup} from '../middlewares/index'

router.post('/singup', [verifySignup.checkRoleExisted, verifySignup.checkDuplicatedUserOrEmail], authCrtl.singUp);

router.post('/singin', authCrtl.singin);

export default router;