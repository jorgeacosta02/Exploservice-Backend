import { Router } from "express";
import { authRequired } from "../../middlewares/validateToken";
import {
    ESGetTasks,
    ESCreateTask,
    ESGetTask,
    ESDeleteTask,
    ESUpdateTask
} from '../../controllers/ESControllers/ESTasksContoller'

const ESTasksRouter = Router();

ESTasksRouter.get('/exploservice/tasks', authRequired, ESGetTasks);
ESTasksRouter.post('/exploservice/tasks', authRequired, ESCreateTask);
ESTasksRouter.delete('/exploservice/tasks/:id', authRequired, ESDeleteTask);
ESTasksRouter.get('/exploservice/tasks/:id', authRequired, ESGetTask);
ESTasksRouter.put('/exploservice/tasks/:id', authRequired, ESUpdateTask);

export default ESTasksRouter