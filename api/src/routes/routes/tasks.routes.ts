import { Router } from "express";
import { authRequired } from "../../middlewares/validateToken";
import {
    ESGetTasks,
    createTaskController,
    getTaskController,
    deleteTaskController,
    updateTaskController
} from '../../controllers/Controllers/tasks.contoller'

const tasksRouter = Router();

tasksRouter.get('/exploservice/tasks', authRequired, ESGetTasks);
tasksRouter.get('/exploservice/tasks/:id', authRequired, getTaskController);
tasksRouter.post('/exploservice/tasks', authRequired, createTaskController);
tasksRouter.delete('/exploservice/tasks/:id', authRequired, deleteTaskController);
tasksRouter.put('/exploservice/tasks/:id', authRequired, updateTaskController);

export default tasksRouter