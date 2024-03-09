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
exports.postElementController = void 0;
const articleModel_1 = require("../models/articleModel");
const locationModel_1 = require("../models/locationModel");
const postElementController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, amount, locationId } = req.body;
    try {
        const newElement = yield articleModel_1.ElementModel.create({ name, description, amount, locationId });
        if (!newElement) {
            return res.status(400).json('Error creating the element');
        }
        const location = yield locationModel_1.LocationModel.findByPk(locationId);
        res.status(201).json({ newElement, location });
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Server error");
    }
});
exports.postElementController = postElementController;
//# sourceMappingURL=postElementController.js.map