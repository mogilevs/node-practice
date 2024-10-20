import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const countProducts = async () => {
    const data = await readFile(PATH_DB, 'utf-8');
    const parcedData = JSON.parse(data);
    return parcedData.length;
}

console.log(await countProducts());