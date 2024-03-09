"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postInventoryMovementController_1 = require("../controllers/postInventoryMovementController");
const inventoryMovementRouter = (0, express_1.Router)();
inventoryMovementRouter.post('/', postInventoryMovementController_1.postInventoryMovementController);
exports.default = inventoryMovementRouter;
//# sourceMappingURL=inventoryMovementRoutes.js.map