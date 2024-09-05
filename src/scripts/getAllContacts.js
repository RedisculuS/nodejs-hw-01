import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const fileContent = await readContacts();
    const contacts = JSON.parse(fileContent);
    console.log('All contacts are successfully shown');
    return contacts;
  } catch (error) {
    console.error('Error while getting all contacts from file', error);
  }
};

console.log(await getAllContacts());
