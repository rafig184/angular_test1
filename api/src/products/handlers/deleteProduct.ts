
import { pool } from "../../../database"


async function deleteProduct(productId: number) {
    const query = "DELETE FROM `store`.`products` WHERE (`idproducts` = ?);"
    const results = await pool.execute(query, [productId]);
    const [data] = results;
    return data;
}

export { deleteProduct }


