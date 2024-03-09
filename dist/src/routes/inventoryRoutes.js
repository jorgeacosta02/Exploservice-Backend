"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getArticleQuantitiesController_1 = require("../controllers/getArticleQuantitiesController");
const inventoryRouter = (0, express_1.Router)();
inventoryRouter.get('/', getArticleQuantitiesController_1.getArticleQuantitiesController);
exports.default = inventoryRouter;
//# sourceMappingURL=inventoryRoutes.js.map