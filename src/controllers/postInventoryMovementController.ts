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
                    updateInventory(articleId, originLocationId, -quantity), // Restar cantidad del origen
                    updateInventory(articleId, destinationLocationId, quantity) // Sumar cantidad al destino
                ]);
                break;
            case 'salida':
                await Promise.all([
                    updateInventory(articleId, originLocationId, quantity), // Restar cantidad del origen
                    updateInventory(articleId, destinationLocationId, -quantity) // Restar cantidad del destino
                ]);
                break;
            case 'transferencia':
                await Promise.all([
                    updateInventory(articleId, originLocationId, -quantity), // Restar cantidad del origen
                    updateInventory(articleId, destinationLocationId, quantity) // Sumar cantidad al destino
                ]);
                break;
            default:
                break;
        }

        // Obtener el inventario actualizado
        const updatedInventory = await InventoryModel.findAll();
        
        return res.status(201).json({ message: 'Successfully created inventory movement', data: newInventoryMovement, inventory: updatedInventory });
    } catch (error: any) {
        console.error("Error creating inventory movement:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// Función para actualizar el inventario
async function updateInventory(
        articleId: any,
        locationId: any,
        quantity: number
    )
    {
        const existingInventory = await InventoryModel.findOne({
            where: { articleId, locationId }
        });

        if (existingInventory) {
            // Si ya existe un registro para este artículo y ubicación, actualizar la cantidad
            await existingInventory.update({ amount: existingInventory.amount + quantity });
        } else {
            // Si no existe, crear un nuevo registro
            await InventoryModel.create({
                articleId,
                locationId,
                amount: quantity
            });
        }
    }
