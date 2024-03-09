"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskController = exports.deleteTaskController = exports.createTaskController = exports.getTaskController = exports.getTasksController = void 0;
const TaskModel_1 = require("../models/TaskModel");
const getTasksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req.body.user.id en GTsC: ', req.body.user.id);
    const tasks = yield TaskModel_1.TaskModel.findOne({
        where: { userId: req.body.user.id }
    });
    res.json(tasks);
});
exports.getTasksController = getTasksController;
const getTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield TaskModel_1.TaskModel.findByPk(req.params.id);
    if (!task)
        return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
});
exports.getTaskController = getTaskController;
const createTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, date, user } = req.body;
    const newTask = new TaskModel_1.TaskModel({
        title,
        description,
        date,
        userId: user.id
    });
    const savedTask = yield newTask.save();
    res.json(savedTask);
});
exports.createTaskController = createTaskController;
const deleteTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield TaskModel_1.TaskModel.destroy({
        where: {
            id: req.params.id
        }
    });
    if (!task)
        return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
});
exports.deleteTaskController = deleteTaskController;
const updateTaskController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield TaskModel_1.TaskModel.update(req.body, {
        where: {
            id: req.params.id,
        }
    });
    if (!task)
        return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
});
exports.updateTaskController = updateTaskController;
//# sourceMappingURL=tasks.contoller.js.map