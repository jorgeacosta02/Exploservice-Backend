import { Router } from "express";
import { postInventoryMovementController } from "../controllers/postInventoryMovementController";

const inventoryMovementRouter = Router()

inventoryMovementRouter.post('/', postInventoryMovementController)

export default inventoryMovementRouter