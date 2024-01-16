import { Request, Response } from "express";
import ESUser, { IUser } from "../../models/ESModels/ESUserModel";
import bcrypt from 'bcrypt';
import { ESCreateToken } from "../../libs/jwt";


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
        // Genero un salt para hashear
        const salt = await bcrypt.genSalt(10);
        // Hasheo la contraseña
        const hash = await bcrypt.hash(password, salt);
        // Creo un nuevo usuario
        const newUser = new ESUser ({
            email,
            password: hash
        });
        // Grabo el usuaro en la base de datos y lo coloco en una variable.
        const savedUser = await newUser.save();
        // Creo un token para el usuario usando la función de libs/jwt
        const token = await ESCreateToken(savedUser);

        // Coloco una cookie en la respuesta
        res.cookie('token', token);
        // Envío la respuesta de éxito al cliente
        res.status(201).json(`El usuario ${savedUser.email} fue creado con éxito!!`);
    } catch (error: any) {
        // Envío respuesta de error al cliente
        res.status(500).json({message: error.message});
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