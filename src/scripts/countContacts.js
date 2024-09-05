import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const fileContent = await readContacts();
    const contacts = JSON.parse(fileContent);

    console.log('Contacts successfully counted');
    return `Contacts amount: ${contacts.length}`;
  } catch (error) {
    console.error('Error while counting contacts', error);
  }
};

console.log(await countContacts());
