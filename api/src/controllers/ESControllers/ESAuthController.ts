import { Request, Response } from "express";
import ESUser, { IUser } from "../../models/ESModels/ESUserModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../../config/config";

const ESCreateToken = (user: IUser) => {
    const tokenCreated = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        config.jwtSecret,
        {
            expiresIn: 86400
        },
        (err, token) => {
            if(err) console.log(err);
            return token;
        }
    );
    return tokenCreated;
}

export const ESSignUp = async (req: Request, res: Response) => {
    
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({msg: 'Por favor envíe su correo y contraseña.'});
    }
    
    const user = await ESUser.findOne({email: email});
    if(user){
        return res.status(400).json({msg: 'El usuario ya existe.'})
    }

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new ESUser ({
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();

        // jwt.sign(
        //     {
        //         id: savedUser.id,
        //         email: savedUser.email
        //     },
        //     config.jwtSecret,
        //     {
        //         expiresIn: 86400
        //     },
        //     (err, token) => {
        //         if(err) console.log(err);
        //         res.cookie('token', token);
        //         return res.status(201).json(`El usuario ${savedUser.email} fue creado con éxito!!`);
        //     }
        // );

        ESCreateToken(savedUser);





    } catch (error) {
       console.log(error);
    }
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
    // if(isMatch){
    //     return res.status(200).json({token: ESCreateToken(user)});
    // };

    return res.status(400).json({msg: 'El correo o la contraseña son incorrectos.'})
}