"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const UserModel_1 = require("./models/UserModel");
const TaskModel_1 = require("./models/TaskModel");
const locationModel_1 = require("./models/locationModel");
const articleModel_1 = require("./models/articleModel");
const inventoryModel_1 = require("./models/inventoryModel");
const inventoryMovementModel_1 = require("./models/inventoryMovementModel");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'exploservice',
    models: [
        UserModel_1.UserModel,
        TaskModel_1.TaskModel,
        locationModel_1.LocationModel,
        articleModel_1.ArticleModel,
        inventoryModel_1.InventoryModel,
        inventoryMovementModel_1.InventoryMovementModel
    ],
    logging: false
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map