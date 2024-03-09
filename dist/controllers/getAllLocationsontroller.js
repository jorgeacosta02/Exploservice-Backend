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
exports.getAllLocationsController = void 0;
const locationModel_1 = require("../models/locationModel");
const getAllLocationsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allLocations = yield locationModel_1.LocationModel.findAll();
        if (!allLocations)
            return res.status(404).json({ msg: "No locations found" });
        else
            return res.status(200).json(allLocations);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
    }
});
exports.getAllLocationsController = getAllLocationsController;
//# sourceMappingURL=getAllLocationsontroller.js.map