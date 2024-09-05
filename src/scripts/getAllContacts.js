import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContent);
    console.log('All contacts are successfully shown');
    return contacts;
  } catch (error) {
    console.error('Error while getting all contacts from file', error);
  }
};

console.log(await getAllContacts());
