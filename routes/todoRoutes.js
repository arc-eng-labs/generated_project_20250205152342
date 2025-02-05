const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// GET: Display all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.render('index', { todos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching todos');
  }
});

// POST: Add a new todo
router.post('/add', async (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.redirect('/');
  }

  try {
    await Todo.create(title);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding todo');
  }
});

// POST: Mark a todo as completed
router.post('/complete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.markCompleted(id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating todo');
  }
});

module.exports = router;
