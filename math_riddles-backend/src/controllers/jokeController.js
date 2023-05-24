const Joke = require('../models/joke');

// Fetch all jokes based on difficulty
exports.getAllJokes = async (req, res) => {
  try {
    const difficulty = req.query.difficulty;
    let jokes;

    if (difficulty) {
      jokes = await Joke.find({ difficulty: difficulty });
    } else {
      jokes = await Joke.find();
    }

    res.json(jokes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch a single joke
exports.getJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({ id: req.params.id });
    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    res.json(joke);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new joke
exports.addJoke = async (req, res) => {
  const { id, question, encodedLetters, difficulty } = req.body;

  // Check for missing or empty fields
  if (!id || id === "") {
    return res.status(400).json({ message: 'ID is required and cannot be empty.' });
  }

  if (!question || question === "") {
    return res.status(400).json({ message: 'Question is required and cannot be empty.' });
  }

  if (!encodedLetters || encodedLetters.length === 0) {
    return res.status(400).json({ message: 'Encoded letters are required and cannot be empty.' });
  }

  if (!difficulty || difficulty === "") {
    return res.status(400).json({ message: 'Difficulty is required and cannot be empty.' });
  }

  // Check if the difficulty is valid
  const validDifficulties = ["easy", "medium", "hard"];
  if (!validDifficulties.includes(difficulty)) {
    return res.status(400).json({ message: 'Difficulty must be one of the following: easy, medium, hard.' });
  }

  // Check if the ID already exists in the database
  const existingJoke = await Joke.findOne({ id: id });
  if (existingJoke) {
    return res.status(400).json({ message: 'A joke with this ID already exists. Please use a unique ID.' });
  }

  // Create the new joke
  const joke = new Joke({ id, question, encodedLetters, difficulty });

  try {
    const savedJoke = await joke.save();
    res.status(201).json(savedJoke);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a joke
exports.updateJoke = async (req, res) => {
  const { question, encodedLetters } = req.body;

  if (!question || !encodedLetters) {
    return res.status(400).json({ message: 'Question and encoded letters are required' });
  }

  try {
    const updatedJoke = await Joke.findByIdAndUpdate(
      req.params.id,
      { question, encodedLetters },
      { new: true }
    );

    if (!updatedJoke) {
      return res.status(404).json({ message: 'Joke not found' });
    }

    res.json(updatedJoke);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete a joke
exports.deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    res.json({ message: 'Joke deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
