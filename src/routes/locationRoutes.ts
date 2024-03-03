import { Router } from "express";
import { postLocationController } from "../controllers/postLocationController";
import { getAllLocationsController } from "../controllers/getAllLocationsontroller";

const locationRouter = Router()

locationRouter.post('/', postLocationController);
locationRouter.get('/', getAllLocationsController)

export default locationRouter;