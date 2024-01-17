import { Router } from "express";
import { authRequired } from "../../middlewares/validateToken";
import {
    ESGetTasks,
    ESCreateTask,
    ESGetTask,
    ESDeleteTasks,
    ESUpdateTasks
} from '../../controllers/ESControllers/ESTasks.contoller'

const ESTasksRouter = Router();

ESTasksRouter.get('/exploservice/tasks', authRequired);
ESTasksRouter.post('/exploservice/tasks', authRequired);
ESTasksRouter.delete('/exploservice/tasks/:id', authRequired);
ESTasksRouter.get('/exploservice/tasks/:id', authRequired);
ESTasksRouter.put('/exploservice/tasks/:id', authRequired);

export default ESTasksRouter