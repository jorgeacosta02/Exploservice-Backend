import { Router } from "express";
import { postArticleController } from "../controllers/postArticleController";

const elementRouter = Router()

elementRouter.post('/', postArticleController)

export  default elementRouter; 