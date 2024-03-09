"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const createToken = (user) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({
            id: user.id,
        }, config_1.default.jwtSecret, {
            expiresIn: 86400
        }, (err, token) => {
            if (err) {
                reject(err);
            }
            else if (token) {
                resolve(token);
            }
            else {
                reject(new Error("Token no generado"));
            }
        });
    });
};
exports.createToken = createToken;
//# sourceMappingURL=jwt.js.map