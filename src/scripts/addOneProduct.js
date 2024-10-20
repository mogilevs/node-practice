import { readFile, writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  parsedData.push(createFakeProduct());
  writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
};

addOneProduct();
