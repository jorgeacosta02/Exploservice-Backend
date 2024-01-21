import { Request, Response, NextFunction } from "express"
import { ZodType, AnyZodObject } from "zod";

const validateSchema = (schema: ZodType<AnyZodObject, any, any>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        schema.parse(data)
        next()
    } catch (error) {
        return res.status(400).json({error})
    }
}