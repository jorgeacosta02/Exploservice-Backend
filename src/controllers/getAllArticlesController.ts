import { Request, Response } from "express";
import { ArticleModel } from "../models/articleModel";

const getAllArticlesController = async (req:Request, res:Response) =>{
    try {
        const allArticles = ArticleModel.findAll();
        if(!allArticles) return res.status(404).json({msg:"No articles found"});
        else return res.status(200).json(allArticles);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
      }
}

export  default getAllArticlesController; 