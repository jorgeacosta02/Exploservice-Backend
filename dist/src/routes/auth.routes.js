"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRegisterController_1 = __importDefault(require("../controllers/authcontrollers/userRegisterController"));
const userLoginController_1 = __importDefault(require("../controllers/authcontrollers/userLoginController"));
const userLogoutController_1 = __importDefault(require("../controllers/authcontrollers/userLogoutController"));
const userProfileController_1 = __importDefault(require("../controllers/authcontrollers/userProfileController"));
const validate_token_1 = require("../middlewares/validate.token");
const authRoutes = (0, express_1.Router)();
authRoutes.post('/register', userRegisterController_1.default);
authRoutes.post('/login', userLoginController_1.default);
authRoutes.post('/logout', userLogoutController_1.default);
authRoutes.get('/profile', validate_token_1.authRequired, userProfileController_1.default);
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map