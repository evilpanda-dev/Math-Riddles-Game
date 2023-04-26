// routes/jokes.js
const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

// Get all jokes
router.get('/', jokeController.getAllJokes);

// Get a single joke by ID
router.get('/:id', jokeController.getJoke);

// Add a new joke
router.post('/', jokeController.addJoke);

// Update a joke by ID
router.put('/:id', jokeController.updateJoke);

// Delete a joke by ID
router.delete('/:id', jokeController.deleteJoke);

module.exports = router;
