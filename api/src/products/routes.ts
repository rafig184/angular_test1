
import express, { NextFunction, Request, Response } from "express"
import zod from "zod"
import { getAllProducts } from "./handlers/getAllProducts"
import { addProduct } from "./handlers/addProduct"



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

export const newProductSchema = zod.object({
    productName: zod.string(),
    price: zod.number(),
    categoryName: zod.string(),
})
console.log(`####################3##${newProductSchema}`);

function middlewareNewProduct(req: Request, res: Response, next: NextFunction) {
    try {
        newProductSchema.parse(req.body)


        return next()
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

productsRouter.post("/new-product", middlewareNewProduct, async function (req: Request, res: Response, next: NextFunction) {
    try {
        const { productName, price, categoryName } = req.body
        console.log(`${productName}=>${price} => ${categoryName}`);
        const result = await addProduct(productName, price, categoryName)
        return res.json({ message: "Product successfully added!" })
    } catch (error) {
        console.log(error)
        return next(error)
    }
})





export { productsRouter }