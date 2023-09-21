
import express, { NextFunction, Request, Response } from "express"
import zod from "zod"
import { getAllProducts } from "./handlers/getAllProducts"



const productsRouter = express.Router()

productsRouter.get("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        const result = await getAllProducts()
        return res.json(result)
    } catch (error) {
        console.log(error);
        return next(error)
    }
})







export { productsRouter }