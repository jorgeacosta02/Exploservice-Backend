import { Router } from 'express';
import postContactController from '../controllers/Controllers/postContact.controller';

const routes = Router();

routes.post('/contact', postContactController);

export default routes;