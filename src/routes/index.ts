import { Router } from 'express';
import authRoutes from './auth.routes';
import tasksRouter from './tasks.routes';
import contactRoutes from './contact.routes';
import locationRouter from './locationRoutes';
import elementRouter from './elementRoutes';


const router = Router()

router.use('/', contactRoutes);
router.use('/', authRoutes);
router.use('/', tasksRouter);
router.use('/location', locationRouter)
router.use('/element', elementRouter)


export default router