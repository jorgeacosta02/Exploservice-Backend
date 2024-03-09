"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllInventoryController_1 = require("../controllers/getAllInventoryController");
const getArticleQuantitiesController_1 = require("../controllers/getArticleQuantitiesController");
const inventoryRouter = (0, express_1.Router)();
inventoryRouter.get('/', getAllInventoryController_1.getAllInventoryController);
inventoryRouter.get('/quantity', getArticleQuantitiesController_1.getArticleQuantitiesController);
exports.default = inventoryRouter;
//# sourceMappingURL=inventoryRoutes.js.map