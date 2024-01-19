import { Request, Response } from "express";
import Task from "../../models/models/task.model";

export const getTasksController = async (req: Request, res: Response) => {
    const tasks = await Task.find()
    res.json(tasks);
};

export const createTaskController = async (req: Request, res: Response) => {
    const { title, description, date, user } = req.body;
    console.log('req.body en CTC: ',req.body);
    console.log('user en CTC: ',user);
    console.log('user.id en CTC: ',user.id);
    const newTask = new Task({
        title,
        description,
        date,
        userId: user.id
    })
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const getTaskController = async (req: Request, res: Response) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(task);
};

export const deleteTaskController = async (req: Request, res: Response) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(task);
};

export const updateTaskController = async (req: Request, res: Response) => {
    // Se colocan dos parámetros, uno de búsqueda y uno con los datos para actualizar
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        // Devuelve el dato anterior a la actualización, con el parámetro new: true, devuelve el actualizado.
        {
            new: true
        }
    );
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(task);
};