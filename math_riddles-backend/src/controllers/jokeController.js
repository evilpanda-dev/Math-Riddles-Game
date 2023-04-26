// controllers/jokeController.js
const Joke = require('../models/joke');

// Fetch all jokes
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch a single joke
exports.getJoke = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
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
    const { question, encodedLetters } = req.body;

    if (!question || !encodedLetters) {
      return res.status(400).json({ message: 'Question and encoded letters are required' });
    }
  
    const joke = new Joke({ question, encodedLetters });

  try {
    const savedJoke = await joke.save();
    res.status(201).json(savedJoke);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a joke
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
