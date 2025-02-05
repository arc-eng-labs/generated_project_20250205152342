const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('todos.db', (err) => {
  if (err) {
    return console.error('Could not connect to database', err);
  }
  console.log('Connected to the SQLite database.');
});

// Create the todos table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  completed INTEGER DEFAULT 0
)`);

module.exports = db;
