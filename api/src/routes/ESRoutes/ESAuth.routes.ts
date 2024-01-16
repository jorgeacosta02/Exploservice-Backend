import { Router } from 'express';
import {
    ESSignUp,
    ESLogIn,
    ESLogOut,
    ESProfile
} from '../../controllers/ESControllers/ESAuthController';
import { authRequired } from '../../middlewares/validateToken'

const ESAuthRoutes = Router();

ESAuthRoutes.post('/exploservice/signup', ESSignUp);
ESAuthRoutes.post('/exploservice/login', ESLogIn);
ESAuthRoutes.post('/exploservice/logout', ESLogOut);
ESAuthRoutes.get('/exploservice/profile', authRequired, ESProfile);

export default ESAuthRoutes