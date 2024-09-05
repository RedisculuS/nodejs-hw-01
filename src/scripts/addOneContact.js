import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContent);
    contacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('One contact is successfully added to file');
  } catch (error) {
    console.error('Error while adding one contact', error);
  }
};

addOneContact();
