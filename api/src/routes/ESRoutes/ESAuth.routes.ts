import { Router } from 'express';
import { ESsignUp, ESLogIn } from '../../controllers/ESControllers/ESUserController';

const ESAuthRoutes = Router();

ESAuthRoutes.post('/exploservice/signup', ESsignUp);
ESAuthRoutes.post('/login', ESLogIn);

export default ESAuthRoutes