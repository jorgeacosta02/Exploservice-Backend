import { Request, Response } from "express";
import { LocationModel } from "../models/locationModel";

export const postLocationController = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    try {
        const newLocation = await LocationModel.create({
            name,
            description
        });
        if (!newLocation) {
            return res.status(400).json({ error: "Failed to create location" });
        } else {
            return res.status(201).json({ message: 'Successfully created location', data: newLocation });
        }
    } catch (error: any) {
        console.error("Error creating location:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
