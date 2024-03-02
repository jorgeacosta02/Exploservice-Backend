import { Router } from "express";
import { postArticleController } from "../controllers/postArticleController";

const articleRouter = Router()

articleRouter.post('/', postArticleController)

export  default articleRouter; 