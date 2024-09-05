import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContent);
    if (contacts.length == 0) {
      console.log('No contacts to delete');
    } else {
      await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
      console.log('All contacts removed successfully');
    }
  } catch (error) {
    console.error('Error while removing all contacts', error);
  }
};

removeAllContacts();
