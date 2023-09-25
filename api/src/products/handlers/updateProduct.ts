



import { pool } from "../../../database"


async function editProduct(product: any) {
    const { productId, productName, price, categoryID } = product
    const query = "UPDATE `store`.`products` SET `productName` = ?, `price` = ?, `categoryID` = ? WHERE (`idproducts` = '37');"
    const results = await pool.execute(query, [productName, price, categoryID, productId]);
    const [data] = results;
    return data;
}

export { editProduct }


