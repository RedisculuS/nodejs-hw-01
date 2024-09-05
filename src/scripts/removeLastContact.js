import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContent);
    if (contacts.length == 0) {
      console.log('No contacts to delete');
    } else {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
      console.log('The last contact removed successfully');
    }
  } catch (error) {
    console.error('Error while removing last contact', error);
  }
};

removeLastContact();
