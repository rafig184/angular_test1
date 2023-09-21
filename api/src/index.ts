import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import { productsRouter } from "./products/routes";

const app = express();
app.use(cors())

const port = 4100

app.get("/health-check", function (req, res, next) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})


app.use("/products", productsRouter)



app.listen(port, () => {
    console.log({ message: `Api is running on Port ${port}` })
})