import { Router } from 'express';
import { ESSignUp, ESLogIn } from '../../controllers/ESControllers/ESAuthController';

const ESAuthRoutes = Router();

ESAuthRoutes.post('/exploservice/signup', ESSignUp);
ESAuthRoutes.post('/exploservice/login', ESLogIn);

export default ESAuthRoutes