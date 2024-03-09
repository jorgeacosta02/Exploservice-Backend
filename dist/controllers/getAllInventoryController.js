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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllInventoryController = void 0;
const inventoryModel_1 = require("../models/inventoryModel");
const articleModel_1 = require("../models/articleModel");
const locationModel_1 = require("../models/locationModel");
const getAllInventoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inventory = yield inventoryModel_1.InventoryModel.findAll({
            include: [
                { model: articleModel_1.ArticleModel },
                { model: locationModel_1.LocationModel }
            ]
        });
        if (!inventory || inventory.length === 0) {
            return res.status(404).json({ msg: "No inventory found" });
        }
        else {
            return res.status(200).json(inventory);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
    }
});
exports.getAllInventoryController = getAllInventoryController;
//# sourceMappingURL=getAllInventoryController.js.map