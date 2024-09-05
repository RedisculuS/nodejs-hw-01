import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const fileContent = await readContacts();
    const contacts = JSON.parse(fileContent);
    if (contacts.length == 0) {
      console.log('No contacts to delete');
    } else {
      await writeContacts(JSON.stringify([]));
      console.log('All contacts removed successfully');
    }
  } catch (error) {
    console.error('Error while removing all contacts', error);
  }
};

removeAllContacts();
