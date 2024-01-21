import { Router } from 'express';
import {
    signUpController,
    logInController,
    logOutController,
    profileController
} from '../controllers/auth.controller';
import { authRequired } from '../middlewares/validateToken'

const authRoutes = Router();

authRoutes.post('/signup', signUpController);
authRoutes.post('/login', logInController);
authRoutes.post('/logout', logOutController);
authRoutes.get('/profile', authRequired, profileController);

export default authRoutes