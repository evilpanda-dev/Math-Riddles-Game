// models/joke.js
const mongoose = require('mongoose');

const EncodedLetterSchema = new mongoose.Schema({
  id: Number,
  letter: String,
  max: Number,
  min: Number,
  rightAnswer: String,
  sign: String,
  total: Number,
});

const JokeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  encodedLetters: [EncodedLetterSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Joke', JokeSchema);
