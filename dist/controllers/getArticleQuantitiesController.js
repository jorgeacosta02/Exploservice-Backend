"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleQuantitiesController = void 0;
const inventoryModel_1 = require("../models/inventoryModel");
const locationModel_1 = require("../models/locationModel");
const sequelize_1 = __importDefault(require("sequelize"));
const getArticleQuantitiesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { articleId } = req.params;
    try {
        const articleQuantities = yield inventoryModel_1.InventoryModel.findAll({
            where: { articleId },
            include: [{ model: locationModel_1.LocationModel }],
            attributes: ['locationId', [sequelize_1.default.fn('sum', sequelize_1.default.col('amount')), 'totalAmount']],
            group: ['locationId']
        });
        return res.status(200).json(articleQuantities);
    }
    catch (error) {
        console.error("Error retrieving article quantities:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getArticleQuantitiesController = getArticleQuantitiesController;
//# sourceMappingURL=getArticleQuantitiesController.js.map