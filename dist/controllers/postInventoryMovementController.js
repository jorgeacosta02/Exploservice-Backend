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
exports.postInventoryMovementController = void 0;
const inventoryMovementModel_1 = require("../models/inventoryMovementModel");
const inventoryModel_1 = require("../models/inventoryModel");
const postInventoryMovementController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movementType, articleId, originLocationId, destinationLocationId, quantity } = req.body;
    try {
        const newInventoryMovement = yield inventoryMovementModel_1.InventoryMovementModel.create({
            movementType,
            articleId,
            originLocationId,
            destinationLocationId,
            quantity
        });
        if (!newInventoryMovement) {
            return res.status(400).json({ error: "Failed to create inventory movement" });
        }
        switch (movementType) {
            case 'Entrada':
                yield Promise.all([
                    updateInventory(articleId, destinationLocationId, +quantity)
                ]);
                break;
            case 'Salida':
                yield Promise.all([
                    updateInventory(articleId, destinationLocationId, -quantity)
                ]);
                break;
            case 'Transferencia':
                yield Promise.all([
                    updateInventory(articleId, originLocationId, -quantity),
                    updateInventory(articleId, destinationLocationId, +quantity)
                ]);
                break;
            default:
                break;
        }
        const updatedInventory = yield inventoryModel_1.InventoryModel.findAll();
        return res.status(201).json({ message: 'Successfully created inventory movement', data: newInventoryMovement, inventory: updatedInventory });
    }
    catch (error) {
        console.error("Error creating inventory movement:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.postInventoryMovementController = postInventoryMovementController;
function updateInventory(articleId, locationId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingInventory = yield inventoryModel_1.InventoryModel.findOne({
            where: { articleId, locationId }
        });
        if (existingInventory) {
            yield existingInventory.update({ amount: existingInventory.amount + quantity });
        }
        else {
            yield inventoryModel_1.InventoryModel.create({
                articleId,
                locationId,
                amount: quantity
            });
        }
    });
}
//# sourceMappingURL=postInventoryMovementController.js.map