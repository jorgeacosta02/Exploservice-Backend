import jwt from "jsonwebtoken";
import { IUser } from "../models/ESModels/ESUserModel";
import config from "../config/config";



const ESCreateToken = (user: IUser): Promise<string> => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            config.jwtSecret,
            {
                expiresIn: 86400
            },
            (err, token) => {
                if (err) {
                    reject(err);
                } else if (token) {
                    resolve(token);
                } else {
                    reject(new Error("Token no generado"));
                }
            }
        );
    })
}