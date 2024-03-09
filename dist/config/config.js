"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    ExploserviceDB: {
        URI: process.env.EXPLOSERVICE_MONGODB_URI,
        USER: process.env.EXPLOSERVICE_MONGODB_USER,
        PASSWORD: process.env.EXPLOSERVICE_MONGODB_PASSWORD
    },
    ExploagroDB: {
        URI: process.env.EXPLOAGRO_MONGODB_URI || 'mongodb://localhost:27017/exploagro',
        USER: process.env.EXPLOAGRO_MONGODB_USER,
        PASSWORD: process.env.EXPLOAGRO_MONGODB_PASSWORD
    }
};
//# sourceMappingURL=config.js.map