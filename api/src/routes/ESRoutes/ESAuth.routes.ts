import { Router } from 'express';
import { ESSignUp, ESLogIn, ESLogOut } from '../../controllers/ESControllers/ESAuthController';

const ESAuthRoutes = Router();

ESAuthRoutes.post('/exploservice/signup', ESSignUp);
ESAuthRoutes.post('/exploservice/login', ESLogIn);
ESAuthRoutes.post('/exploservice/logout', ESLogOut);

export default ESAuthRoutes