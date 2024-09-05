import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const fileContent = await readContacts();
    const contacts = JSON.parse(fileContent);
    contacts.push(createFakeContact());
    await writeContacts(JSON.stringify(contacts, null, 2));
    console.log('One contact is successfully added to file');
  } catch (error) {
    console.error('Error while adding one contact', error);
  }
};

addOneContact();
