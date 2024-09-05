import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const fileContent = await readContacts();
    const contacts = JSON.parse(fileContent);
    if (contacts.length == 0) {
      console.log('No contacts to delete');
    } else {
      contacts.pop();
      await writeContacts(JSON.stringify(contacts, null, 2));
      console.log('The last contact removed successfully');
    }
  } catch (error) {
    console.error('Error while removing last contact', error);
  }
};

removeLastContact();
