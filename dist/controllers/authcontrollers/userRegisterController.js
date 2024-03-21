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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../../libs/jwt");
const userRegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, dni, birthDae, phone, email, password, role } = req.body;
    if (!firstName)
        return res.status(400).json({ msg: 'Por favor envíe su nombre.' });
    if (!lastName)
        return res.status(400).json({ msg: 'Por favor envíe su apellido.' });
    console.log(dni);
    if (!dni)
        return res.status(400).json({ msg: 'Por favor envíe su dni.' });
    if (!email)
        return res.status(400).json({ msg: 'Por favor envíe su nombre correo.' });
    if (!password)
        return res.status(400).json({ msg: 'Por favor envíe su contraseña.' });
    const user = yield UserModel_1.UserModel.findOne({
        where: {
            dni: dni
        }
    });
    if (user) {
        return res.status(400).json({ msg: 'El usuario ya existe.' });
    }
    try {
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const newUser = new UserModel_1.UserModel({
            firstName,
            lastName,
            dni,
            phone,
            email,
            password: hash,
            role,
        });
        const savedUser = yield newUser.save();
        const token = yield (0, jwt_1.createToken)({
            id: savedUser.id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            dni: savedUser.dni,
            phone: savedUser.phone,
            email: savedUser.email,
            active: savedUser.active,
            role: savedUser.role
        });
        res.status(201).json(`El usuario ${savedUser.firstName} ${savedUser.lastName} fue creado con éxito!!`);
    }
    catch (error) {
        res.status(500).json({ 'error': error.message });
    }
});
exports.default = userRegisterController;
//# sourceMappingURL=userRegisterController.js.map