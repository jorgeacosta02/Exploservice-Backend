import { Router } from "express";
import { getAllInventoryController } from "../controllers/getAllInventoryController";
import { getArticleQuantitiesController } from "../controllers/getArticleQuantitiesController";


const inventoryRouter = Router()

inventoryRouter.get('/', getAllInventoryController)
inventoryRouter.get('/quantity', getArticleQuantitiesController)

export default inventoryRouter