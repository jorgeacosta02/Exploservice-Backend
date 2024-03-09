"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postLocationController_1 = require("../controllers/postLocationController");
const getAllLocationsontroller_1 = require("../controllers/getAllLocationsontroller");
const locationRouter = (0, express_1.Router)();
locationRouter.post('/', postLocationController_1.postLocationController);
locationRouter.get('/', getAllLocationsontroller_1.getAllLocationsController);
exports.default = locationRouter;
//# sourceMappingURL=locationRoutes.js.map