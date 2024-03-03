import { Request, Response } from "express";
import { InventoryMovementModel } from "../models/inventoryMovementModel";
import { InventoryModel } from "../models/inventoryModel";

export const postInventoryMovementController = async (req: Request, res: Response) => {
    const { movementType, articleId, originLocationId, destinationLocationId, quantity } = req.body;

    try {
        // Crear el movimiento de inventario
        const newInventoryMovement = await InventoryMovementModel.create({
            movementType,
            articleId,
            originLocationId,
            destinationLocationId,
            quantity
        });

        if (!newInventoryMovement) {
            return res.status(400).json({ error: "Failed to create inventory movement" });
        }

        // Actualizar el inventario según el tipo de movimiento
        switch (movementType) {
            case 'entrada':
                await Promise.all([
                    InventoryModel.increment('amount', { by: quantity, where: { articleId, locationId: destinationLocationId } }),
                    InventoryModel.increment('amount', { by: quantity, where: { articleId, locationId: originLocationId } })
                ]);
                break;
            case 'salida':
                await InventoryModel.decrement('amount', { by: quantity, where: { articleId, locationId: originLocationId } });
                await InventoryModel.decrement('amount', { by: quantity, where: { articleId, locationId: destinationLocationId } });
                break;
            case 'transferencia':
                await Promise.all([
                    InventoryModel.increment('amount', { by: quantity, where: { articleId, locationId: destinationLocationId } }),
                    InventoryModel.decrement('amount', { by: quantity, where: { articleId, locationId: originLocationId } })
                ]);
                break;
            default:
                break;
        }

        return res.status(201).json({ message: 'Successfully created inventory movement', data: newInventoryMovement });
    } catch (error: any) {
        console.error("Error creating inventory movement:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
