import { Request, Response } from "express";
import { ArticleModel } from "../models/articleModel";
import { LocationModel } from "../models/locationModel";


export const postArticleController = async (req:Request, res:Response) => {
    const {
        name,
        description,
        amount,
        locationId
    } = req.body;
    
    try{
        const newElement = await  ArticleModel.create({name,description,amount,locationId});
        
        if(!newElement){
            return res.status(400).json('Error creating the element');
        }

        //Getting the associated location to add it in the response
        const location = await LocationModel.findByPk(locationId);

        res.status(201).json({newElement, location})
    }catch(error){
        console.log(error);
        res.status(500).json("Server error");
    }
}