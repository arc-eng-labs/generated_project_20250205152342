const db = require('../config/db');

class Todo {
  static async create(title) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
      db.run(query, [title, 0], function (err) {
        if (err) {
          return reject(err);
        }
        resolve({ id: this.lastID, title, completed: 0 });
      });
    });
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM todos';
      db.all(query, [], (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  static async markCompleted(id) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE todos SET completed = 1 WHERE id = ?';
      db.run(query, [id], function (err) {
        if (err) {
          return reject(err);
        }
        resolve(this.changes);
      });
    });
  }
}

module.exports = Todo;
