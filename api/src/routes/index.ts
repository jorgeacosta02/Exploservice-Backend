import { Router } from 'express';
import ESRoutes from './ESRoutes/ESIndex';
import EARoutes from './EARoutes/EAIndex';

const router = Router()

router.use('/exploservice', ESRoutes);
router.use('/exploagro', EARoutes);

export default router