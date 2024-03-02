import { Router } from "express";
import { postElementController } from "../controllers/postElementController";

const elementRouter = Router()

elementRouter.post('/', postElementController)

export  default elementRouter; 