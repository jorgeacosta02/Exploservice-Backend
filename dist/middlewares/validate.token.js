"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequired = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token)
        return res.status(401).json({ message: "No hay token de autorización" });
    jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret, (err, user) => {
        if (err) {
            return res.status(406).json({ message: err.message });
        }
        req.body.user = user;
        next();
    });
};
exports.authRequired = authRequired;
//# sourceMappingURL=validate.token.js.map