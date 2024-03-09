"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const tasks_routes_1 = __importDefault(require("./tasks.routes"));
const contact_routes_1 = __importDefault(require("./contact.routes"));
const locationRoutes_1 = __importDefault(require("./locationRoutes"));
const articleRoutes_1 = __importDefault(require("./articleRoutes"));
const inventoryMovementRoutes_1 = __importDefault(require("./inventoryMovementRoutes"));
const inventoryRoutes_1 = __importDefault(require("./inventoryRoutes"));
const router = (0, express_1.Router)();
router.use('/', contact_routes_1.default);
router.use('/', auth_routes_1.default);
router.use('/', tasks_routes_1.default);
router.use('/location', locationRoutes_1.default);
router.use('/article', articleRoutes_1.default);
router.use('/inventory-movement', inventoryMovementRoutes_1.default);
router.use('/inventory', inventoryRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map