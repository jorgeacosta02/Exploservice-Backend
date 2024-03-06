import { Request, Response } from "express";
import { InventoryModel } from "../models/inventoryModel";
import { ArticleModel } from "../models/articleModel"; // Asegúrate de importar el modelo del artículo
import { LocationModel } from "../models/locationModel"; // Asegúrate de importar el modelo de la ubicación

export const getAllInventoryController = async (req: Request, res: Response) => {
    try {
        const inventory = await InventoryModel.findAll({
            include: [
                { model: ArticleModel }, // Incluir modelo de artículo
                { model: LocationModel } // Incluir modelo de ubicación
            ]
        });

        if (!inventory || inventory.length === 0) {
            return res.status(404).json({ msg: "No inventory found" });
        } else {
            return res.status(200).json(inventory);
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
    }
}