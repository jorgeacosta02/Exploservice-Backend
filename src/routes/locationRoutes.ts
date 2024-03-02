import { Router } from "express";
import { postLocationController } from "../controllers/postLocationController";

const locationRouter = Router()

locationRouter.post('/', postLocationController);

export default locationRouter;