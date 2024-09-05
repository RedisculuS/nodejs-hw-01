import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContent);

    console.log('Contacts successfully counted');
    return `Contacts amount: ${contacts.length}`;
  } catch (error) {
    console.error('Error while counting contacts', error);
  }
};

console.log(await countContacts());
