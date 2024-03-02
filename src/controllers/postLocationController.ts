import { Request, Response } from "express";
import { LocationModel } from "../models/locationModel";

export const postLocationController = async (req: Request, res: Response) => {
    const {
        name,
        description,
    } = req.body
    try {
        const newLocation = LocationModel.create(name, description);
        if (!newLocation) return res.status(400).send("Failed to create location");
        else return res.json({ message: 'Successfully created location', data: newLocation });
    } catch (error: any) {
        console.log(error.message)
    }
}