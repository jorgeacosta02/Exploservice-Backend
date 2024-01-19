import { Router } from 'express';
import routes from './routes/Index';
import EARoutes from './EARoutes/EAIndex';

const router = Router()

router.use('/exploservice', routes);
router.use('/exploagro', EARoutes);

export default router