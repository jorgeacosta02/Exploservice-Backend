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
const db_1 = __importDefault(require("./db"));
const app_1 = __importDefault(require("./app"));
const dataBase_1 = __importDefault(require("../helpers/dataBase"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.default.authenticate();
            console.log("Conexión a la Base de Datos exitosa ahora");
            const syncOptions = { force: true };
            yield db_1.default.sync(syncOptions)
                .then(() => {
                (0, dataBase_1.default)(),
                    app_1.default.listen(port, () => {
                        console.log(`Server listening now on port ${port}`);
                    });
            });
            console.log("La base de datos se ha sincronizado correctamente ahora");
        }
        catch (error) {
            console.error("Error al conectarse a la Base de Datos:", error);
            process.exit(1);
        }
    });
}
main();
app_1.default.use((err, req, res, next) => {
    console.error("Error en la aplicación:", err);
    res.status(500).send("Internal Server Error");
});
//# sourceMappingURL=index.js.map