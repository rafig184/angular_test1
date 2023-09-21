
import { pool } from "../../../database"


async function addProduct(productName: string, price: number, categoryName: string) {
    // const { productName, price, categoryName } = product
    const query = `INSERT INTO store.products (productName, price, categoryID)
    SELECT
        ? AS productName,
        ? AS price,
        (SELECT categoryID FROM store.categories WHERE categoryName = ?) AS categoryID;`;
    const results = await pool.execute(query, [productName, price, categoryName]);
    const [data] = results;
    return data;
}

export { addProduct }


