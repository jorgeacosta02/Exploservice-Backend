import { Router } from 'express';
import authRoutes from './auth.routes';
import tasksRouter from './tasks.routes';
import contactRoutes from './contact.routes';
import EARoutes from './EARoutes/EAIndex';

const router = Router()

router.use('/', contactRoutes)
router.use('/', authRoutes);
router.use('/', tasksRouter);
router.use('/exploagro', EARoutes);

export default router