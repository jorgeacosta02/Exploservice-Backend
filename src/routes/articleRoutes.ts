import { Router } from "express";
import { postArticleController } from "../controllers/postArticleController";
import { getAllArticlesController } from "../controllers/getAllArticlesController";

const articleRouter = Router()

articleRouter.post('/', postArticleController)
articleRouter.get('/', getAllArticlesController)

export  default articleRouter; 