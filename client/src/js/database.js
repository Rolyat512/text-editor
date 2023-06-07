import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate_db', 1, {
    // switched the starter code from 'jate' to jate_db
    upgrade(db) {
      if (db.objectStoreNames.contains('jate_db')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate_db', { keyPath: 'id', autoIncrement: true });

      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// copy and pasted (with a few tweaks from class code)

export const putDb = async (content) => {
  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  const jate_db = await openDB('jate_db', 1);
  // In the example code they named the database jate? 

  // Create a new transaction and specify the database and data privileges.
  const tx = jate_db.transaction('jate_db', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate_db');

  // Use the .add() method on the store and pass in the content.
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
} 


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {  

  console.log('GET all from the database');

// Create a connection to the database database and version we want to use.
const jate_db = await openDB('jate_db', 1);

// Create a new transaction and specify the database and data privileges.
const tx = jate_db.transaction('jate_db', 'readonly');

// Open up the desired object store.
const store = tx.objectStore('jate_db');

// Use the .getAll() method to get all data in the database.
const request = store.getAll();

 // Get confirmation of the request.
const result = await request;
console.log('result.value', result?.value);
return result?.value;
} 


initdb();
