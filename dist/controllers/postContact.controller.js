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
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { EXPLOSERVICE_NODEMAILER_USER, EXPLOSERVICE_NODEMAILER_PASS, DESTINATION_EMAIL } = process.env;
const postContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, subject, message } = req.body;
        let transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: EXPLOSERVICE_NODEMAILER_USER,
                pass: EXPLOSERVICE_NODEMAILER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        let mailOptions = {
            from: EXPLOSERVICE_NODEMAILER_USER,
            to: DESTINATION_EMAIL,
            subject,
            html: `<html>
	<head>
        <body>
        <h3 style="color:#9E7842">Datos del usuario:<h3>
        <p><b>Nombre:</b> ${name}.</p>
        <p><b>Correo electrónico:</b> ${email}</p>
        </br>
        <h3 style="color:#9E7842">Mensaje:</h3>
        <p>${message}.<p>
		</body>
	</head>
</html>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            console.log("Error in sendMail callback:", error);
            if (error) {
                return res.status(500).send(error.message);
            }
            else {
                return res.status(200).send("it was sent satisfactorily");
            }
        });
    }
    catch (error) {
        console.log("Error in catch block:", error);
        if (error instanceof Error) {
            console.log(error.message);
            return res.status(500).send(error.message);
        }
        else {
            console.log("Unexpected error");
            return res.status(500).send("Unexpected error");
        }
    }
});
exports.default = postContactController;
//# sourceMappingURL=postContact.controller.js.map