import { Request, Response } from "express";
import { ArticleModel } from "../models/articleModel";


export const postArticleController = async (req:Request, res:Response) => {
    const {
        name,
        description,
    } = req.body;
    
    try{
        const newArticle = await ArticleModel.create({
            name,
            description
        });
        
        if(!newArticle){
            return res.status(400).json('Error creating the element');
        }

        res.status(201).json(newArticle)
    }catch(error){
        console.log(error);
        res.status(500).json("Server error");
    }
}