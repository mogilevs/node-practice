import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readFile, writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (number) => {
  const data = await readFile(PATH_DB, 'utf-8');
  const parseData = JSON.parse(data);
  const newData = Array(number).fill(0).map(createFakeProduct);
  const res = [...parseData, ...newData];

  writeFile(PATH_DB, JSON.stringify(res, null, 2), 'utf-8');
};

generateProducts(5);
