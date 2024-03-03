import { Router } from "express";
import { getArticleQuantitiesController } from "../controllers/getArticleQuantitiesController";


const inventoryRouter = Router()

inventoryRouter.get('/', getArticleQuantitiesController)

export default inventoryRouter