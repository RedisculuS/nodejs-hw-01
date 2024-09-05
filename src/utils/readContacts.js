import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Error while reading file:', error);
  }
};
