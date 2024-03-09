"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_token_1 = require("../middlewares/validate.token");
const tasks_contoller_1 = require("../controllers/tasks.contoller");
const tasksRouter = (0, express_1.Router)();
tasksRouter.get('/tasks', validate_token_1.authRequired, tasks_contoller_1.getTasksController);
tasksRouter.get('/tasks/:id', validate_token_1.authRequired, tasks_contoller_1.getTaskController);
tasksRouter.post('/tasks', validate_token_1.authRequired, tasks_contoller_1.createTaskController);
tasksRouter.delete('/tasks/:id', validate_token_1.authRequired, tasks_contoller_1.deleteTaskController);
tasksRouter.put('/tasks/:id', validate_token_1.authRequired, tasks_contoller_1.updateTaskController);
exports.default = tasksRouter;
//# sourceMappingURL=tasks.routes.js.map