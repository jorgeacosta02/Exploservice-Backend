import { InventoryModel } from "../models/inventoryModel";
import { LocationModel } from "../models/locationModel";
import { Request, Response } from "express";
import sequelize from "sequelize";


export const getArticleQuantitiesController = async (req: Request, res: Response) => {
    const { articleId } = req.params;

    try {
        const articleQuantities = await InventoryModel.findAll({
            where: { articleId },
            include: [{ model: LocationModel }],
            attributes: ['locationId', [sequelize.fn('sum', sequelize.col('amount')), 'totalAmount']],
            group: ['locationId']
        });

        return res.status(200).json(articleQuantities);
    } catch (error: any) {
        console.error("Error retrieving article quantities:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
