# Simple Node.js Todo App

## Overview
This is a simple Todo application built with Node.js, Express, and SQLite. You can view, add, and mark tasks as complete from a simple user interface. All todo items are stored in a local SQLite database.

## Features
- Create new todo items.
- View a list of existing todo items.
- Mark existing todo items as completed.

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [EJS Templates](https://ejs.co/)
- HTML/CSS

## Project Structure

```
.
├── README.md
├── package.json
├── .gitignore
├── server.js
├── config/
│   └── db.js
├── models/
│   └── todo.js
├── routes/
│   └── todoRoutes.js
├── views/
│   ├── layout.ejs
│   └── index.ejs
└── public/
    └── css/
        └── styles.css
```

### 1. README.md
Project documentation.

### 2. package.json
Specifies project dependencies and metadata.

### 3. .gitignore
Lists files and directories that should be ignored by Git (e.g., `node_modules`, logs, etc.).

### 4. server.js
Sets up an Express server and connects routes.

### 5. config/db.js
Creates and configures an SQLite database and exports the database connection.

### 6. models/todo.js
Defines the Todo model to interact with the SQLite database.

### 7. routes/todoRoutes.js
Defines the routes for todo-related creation, reading, and updating operations.

### 8. views/layout.ejs
Defines a simple layout template with shared HTML structure.

### 9. views/index.ejs
Provides the main user interface to view and add todo items.

### 10. public/css/styles.css
Contains the basic styling for our todo list UI.

## Installation
1. Clone this repository:

```bash
git clone <repository-url>
cd nodejs-todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

The server will start listening on http://localhost:3000.

## Usage
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
- Add new todos using the text field and 'Add' button.
- Mark todos as completed by clicking on the corresponding checkbox.

## License
This project is licensed under the MIT License.

---

Happy coding!
