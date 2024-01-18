import { Request, Response } from "express";
import ESTask from "../../models/ESModels/ESTask.model";

export const ESGetTasks = async (req: Request, res: Response) => {
    const tasks = await ESTask.find()
    res.json(ESTask);
};

export const ESCreateTask = async (req: Request, res: Response) => {
    const { title, description, date } = req.body;
    const newTask = new ESTask({
        title,
        description,
        date
    })
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const ESGetTask = async (req: Request, res: Response) => {
    const task = await ESTask.findById(req.params.id);
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(task);
};

export const ESDeleteTask = async (req: Request, res: Response) => {
    const task = await ESTask.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(task);
};

export const ESUpdateTask = async (req: Request, res: Response) => {
    // Se colocan dos parámetros, uno de búsqueda y uno con los datos para actualizar
    const task = await ESTask.findByIdAndUpdate(
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