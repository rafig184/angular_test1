
import { pool } from "../../../database"


async function getAllProducts() {
    const query = `SELECT 
    store.products.idproducts,
    store.products.productName,
    store.products.price,
    store.categories.categoryName,
    store.categories.categoryID
FROM
    store.products
JOIN
    store.categories ON store.products.categoryID = store.categories.categoryID
ORDER BY
    store.products.idproducts ASC;`;
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getAllProducts }


