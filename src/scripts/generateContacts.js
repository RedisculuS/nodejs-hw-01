import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const fileContent = await readContacts();
    const contacts = JSON.parse(fileContent);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await writeContacts(JSON.stringify(contacts, null, 2));
    console.log('Data successfully added');
  } catch (error) {
    console.error('Error while adding data to file', error);
  }
};

generateContacts(5);
