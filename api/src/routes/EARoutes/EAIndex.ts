import { Router } from 'express';
import EAPostContactController from '../../controllers/EAControllers/EAPostContactController';


const EARoutes = Router();

EARoutes.post('/contact', EAPostContactController);

export default EARoutes;