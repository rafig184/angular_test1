
import { pool } from "../../../database"


async function getAllCategories() {
    const query = `SELECT * FROM store.categories;`;
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getAllCategories }


