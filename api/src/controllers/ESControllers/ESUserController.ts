import { Request, Response } from "express";
import ESUser, { IUser } from "../../models/ESModels/ESUserModel";
import jwt from 'jsonwebtoken';
import config from "../../config/config";

const ESCreateToken = (user: IUser) => {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn: 86400
    });
};

export const ESsignUp = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: 'Por favor envíe su correo y contraseña.'});
    }
    
    const user = await ESUser.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({msg: 'El usuario ya existe.'})
    }

    const newUser = new ESUser (req.body);
    await newUser.save();
    return res.status(201).json(newUser);
}

export const ESLogIn = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: 'Por favor envíe su correo y contraseña.'});
    };

    const user = await ESUser.findOne({email: req.body.email});
    if(!user){
        return res.status(404).json({msg: 'El usuario no existe.'});
    };

    const isMatch = await user.comparePassword(req.body.password);
    if(isMatch){
        return res.status(200).json({token: ESCreateToken(user)});
    };

    return res.status(400).json({msg: 'El correo o la contraseña son incorrectos.'})
}