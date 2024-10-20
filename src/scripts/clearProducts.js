import { PATH_DB } from '../constants/products.js';
import { writeFile } from 'node:fs/promises';

const clearProducts = async () => {
  writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
};

clearProducts();
