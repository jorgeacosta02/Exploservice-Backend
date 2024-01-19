import { Router } from 'express';
import {
    signUpController,
    logInController,
    logOutController,
    profileController
} from '../../controllers/Controllers/auth.controller';
import { authRequired } from '../../middlewares/validateToken'

const authRoutes = Router();

authRoutes.post('/exploservice/signup', signUpController);
authRoutes.post('/exploservice/login', logInController);
authRoutes.post('/exploservice/logout', logOutController);
authRoutes.get('/exploservice/profile', authRequired, profileController);

export default authRoutes