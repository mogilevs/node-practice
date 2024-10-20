import { readFile, writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const removeRandomProduct = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  const newArray = parsedData.splice(
    Math.floor(Math.random() * parsedData.length),
    1,
  );
  console.log(newArray);
  writeFile(PATH_DB, JSON.stringify(parsedData), 'utf-8');
};

removeRandomProduct();
