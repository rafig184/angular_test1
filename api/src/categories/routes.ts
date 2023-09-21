
import express, { NextFunction, Request, Response } from "express"
import { getAllCategories } from "./handlers/getCategories"



const categoriesRouter = express.Router()

categoriesRouter.get("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        const result = await getAllCategories()
        return res.json(result)
    } catch (error) {
        console.log(error);
        return next(error)
    }
})







export { categoriesRouter }