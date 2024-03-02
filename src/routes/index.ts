import { Router } from 'express';
import authRoutes from './auth.routes';
import tasksRouter from './tasks.routes';
import contactRoutes from './contact.routes';
import locationRouter from './locationRoutes';
import articleRouter from './articleRoutes';


const router = Router()

router.use('/', contactRoutes);
router.use('/', authRoutes);
router.use('/', tasksRouter);
router.use('/location', locationRouter)
router.use('/element', articleRouter)


export default router