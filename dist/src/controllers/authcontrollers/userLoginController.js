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
const UserModel_1 = require("../../models/UserModel");
;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../../libs/jwt");
const userLogInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('res.cookie: ', res.cookie);
    const { dni, password } = req.body;
    if (!dni || !password) {
        return res.status(400).json({ msg: 'Por favor envíe su dni y contraseña.' });
    }
    ;
    try {
        const user = yield UserModel_1.UserModel.findOne({
            where: {
                dni
            },
        });
        if (!user) {
            return res.status(404).json({ msg: 'El usuario no existe.' });
        }
        ;
        const pwdMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!pwdMatch) {
            return res.status(400).json({ msg: 'El dni o la contraseña son incorrectos.' });
        }
        ;
        const tokenData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            dni: user.dni,
            phone: user.phone,
            email: user.email,
            position: user.position,
            active: user.active,
            role: user.role
        };
        console.log('tokenData en loginController', tokenData);
        const token = yield (0, jwt_1.createToken)(tokenData);
        console.log('token en loginController', token);
        res.cookie('token', token);
        console.log(user);
        res.status(201).json({ user: tokenData });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = userLogInController;
//# sourceMappingURL=userLoginController.js.map