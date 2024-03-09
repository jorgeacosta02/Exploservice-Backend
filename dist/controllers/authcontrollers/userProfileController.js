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
const UserModel_1 = require("../../models/UserModel");
const userProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.user) {
        try {
            const userFound = yield UserModel_1.UserModel.findByPk(req.body.user.id);
            return res.json({
                id: userFound === null || userFound === void 0 ? void 0 : userFound.id,
            });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    else {
        res.status(401).json({ message: 'Usuario no autenticado' });
    }
});
exports.default = userProfileController;
//# sourceMappingURL=userProfileController.js.map