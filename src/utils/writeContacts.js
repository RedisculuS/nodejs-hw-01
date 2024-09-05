import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = 'Data written in file';
  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Data is successfully written in file');
  } catch (error) {
    console.error('Error while writing data in file:', error);
  }
};
