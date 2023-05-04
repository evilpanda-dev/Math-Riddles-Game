const mongoose = require('mongoose');
const Joke = require('../models/joke');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Define the data to be inserted
const jokes = [
  {
    id: 1,
    question: 'Why did the tomato turn red?',
    encodedLetters: [
      {
        id: 1,
        letter: 'B',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 2,
        letter: 'L',
        max: 5,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 3,
        letter: 'U',
        max: 9,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 7,
      },
      {
        id: 4,
        letter: 'S',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'H',
        max: 10,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 6,
        letter: 'E',
        max: 6,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 7,
        letter: 'D',
        max: 8,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
    ],
  },
  {
    id: 2,
    question: 'What did the big flower say to the little flower?',
    encodedLetters: [
      {
        id: 1,
        letter: 'H',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 2,
        letter: 'I',
        max: 8,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
    ],
  },
  {
    id: 3,
    question: 'What do you get when you cross a snowman and a dog?',
    encodedLetters: [
      {
        id: 1,
        letter: 'F',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 10,
      },
      {
        id: 2,
        letter: 'R',
        max: 6,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 3,
        letter: 'O',
        max: 9,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
      {
        id: 4,
        letter: 'S',
        max: 5,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 5,
        letter: 'T',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 6,
        letter: 'B',
        max: 7,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 7,
        letter: 'I',
        max: 10,
        min: 5,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
      {
        id: 8,
        letter: 'T',
        max: 8,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
      {
        id: 9,
        letter: 'E',
        max: 6,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
    ],
  },
  {
    id: 4,
    question: 'What do you call a dinosaur with an extensive vocabulary?',
    encodedLetters: [
      {
        id: 1,
        letter: 'T',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 10,
      },
      {
        id: 2,
        letter: 'H',
        max: 9,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 10,
      },
      {
        id: 3,
        letter: 'E',
        max: 8,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 4,
        letter: 'S',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 5,
        letter: 'A',
        max: 5,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 6,
        letter: 'U',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 7,
        letter: 'R',
        max: 9,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 7,
      },
    ],
  },
  {
    id: 5,
    question: 'Why did the scarecrow win an award?',
    encodedLetters: [
      {
        id: 1,
        letter: 'H',
        max: 5,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 2,
        letter: 'E',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 3,
        letter: 'W',
        max: 6,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 4,
        letter: 'A',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'S',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 6,
        letter: 'O',
        max: 10,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 12,
      },
      {
        id: 7,
        letter: 'U',
        max: 9,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 7,
      },
      {
        id: 8,
        letter: 'T',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 9,
        letter: 'S',
        max: 8,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 10,
        letter: 'T',
        max: 10,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 11,
        letter: 'A',
        max: 7,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 12,
        letter: 'N',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 13,
        letter: 'D',
        max: 6,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 14,
        letter: 'I',
        max: 8,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 15,
        letter: 'N',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 16,
        letter: 'G',
        max: 9,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 7,
      },
    ],
  },
  {
    id: 6,
    question: 'Why don\'t scientists trust atoms?',
    encodedLetters: [
      {
        id: 1,
        letter: 'T',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 2,
        letter: 'H',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 3,
        letter: 'E',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'Y',
        max: 6,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 3,
      },
      {
        id: 5,
        letter: 'M',
        max: 10,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 6,
        letter: 'A',
        max: 8,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 7,
        letter: 'K',
        max: 7,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 8,
        letter: 'E',
        max: 5,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 9,
        letter: 'U',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 10,
        letter: 'P',
        max: 8,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
    ],
  },
  {
    id: 7,
    question: 'What do you call a boomerang that won\'t come back?',
    encodedLetters: [
      {
        id: 1,
        letter: 'S',
        max: 6,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 2,
        letter: 'T',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 3,
        letter: 'I',
        max: 5,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'C',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'K',
        max: 9,
        min: 5,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
    ],
  },
  {
    id: 8,
    question: 'Why was the math book sad?',
    encodedLetters: [
      {
        id: 1,
        letter: 'T',
        max: 6,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 2,
        letter: 'O',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 3,
        letter: 'O',
        max: 5,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'M',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'A',
        max: 9,
        min: 5,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 6,
        letter: 'N',
        max: 7,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 7,
        letter: 'Y',
        max: 6,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
    ],
  },
  {
    id: 9,
    question: 'Why did the tomato turn red?',
    encodedLetters: [
      {
        id: 1,
        letter: 'S',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'H',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'Y',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
    ],
  },
  {
    id: 10,
    question: 'What do you get when you cross a sheep and a kangaroo?',
    encodedLetters: [
      {
        id: 1,
        letter: 'W',
        max: 6,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 9,
      },
      {
        id: 2,
        letter: 'O',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'O',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 10,
      },
      {
        id: 4,
        letter: 'L',
        max: 9,
        min: 5,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
    ],
  },
  {
    id: 11,
    question: 'Why did the bicycle fall over?',
    encodedLetters: [
      {
        id: 1,
        letter: 'T',
        max: 5,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 7,
      },
      {
        id: 2,
        letter: 'I',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'R',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'E',
        max: 9,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
      {
        id: 5,
        letter: 'D',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 10,
      },
    ],
  },
  {
    id: 12,
    question: 'What do elves learn in school?',
    encodedLetters: [
      {
        id: 1,
        letter: 'E',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'L',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'F',
        max: 10,
        min: 6,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 4,
        letter: 'A',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 5,
        letter: 'B',
        max: 9,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
      {
        id: 6,
        letter: 'E',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '+',
        total: 10,
      },
      {
        id: 7,
        letter: 'T',
        max: 8,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
    ],
  },
  {
    id: 13,
    question: 'Why did the golfer bring an extra pair of pants?',
    encodedLetters: [
      {
        id: 1,
        letter: 'H',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'O',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'L',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'E',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
    ],
  },
  {
    id: 14,
    question: 'How do oceans say hello?',
    encodedLetters: [
      {
        id: 1,
        letter: 'W',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 2,
        letter: 'A',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'V',
        max: 9,
        min: 2,
        rightAnswer: false,
        sign: '-',
        total: 7,
      },
      {
        id: 4,
        letter: 'E',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
    ],
  },
  {
    id: 15,
    question: 'Why did the tomato turn red?',
    encodedLetters: [
      {
        id: 1,
        letter: 'B',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'L',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'U',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'S',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'H',
        max: 8,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
    ],
  },
  {
    id: 16,
    question: 'Why don\'t some couples go to the gym?',
    encodedLetters: [
      {
        id: 1,
        letter: 'B',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'A',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'D',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 4,
        letter: 'M',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'I',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 6,
        letter: 'T',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
    ],
  },
  {
    id: 17,
    question: 'What has four wheels and flies?',
    encodedLetters: [
      {
        id: 1,
        letter: 'T',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 2,
        letter: 'R',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'A',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 4,
        letter: 'S',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'H',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
    ],
  },
  {
    id: 18,
    question: 'Why did the scarecrow win an award?',
    encodedLetters: [
      {
        id: 1,
        letter: 'B',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'R',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'A',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'I',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'N',
        max: 8,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
    ],
  },
  {
    id: 19,
    question: 'What do you call fake spaghetti?',
    encodedLetters: [
      {
        id: 1,
        letter: 'I',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 2,
        letter: 'M',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'P',
        max: 9,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 6,
      },
      {
        id: 4,
        letter: 'A',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'S',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 6,
        letter: 'T',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 7,
        letter: 'A',
        max: 7,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
    ],
  },
  {
    id: 20,
    question: 'Why did the bicycle fall over?',
    encodedLetters: [
      {
        id: 1,
        letter: 'T',
        max: 5,
        min: 1,
        rightAnswer: false,
        sign: '+',
        total: 6,
      },
      {
        id: 2,
        letter: 'I',
        max: 7,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 3,
        letter: 'R',
        max: 6,
        min: 2,
        rightAnswer: false,
        sign: '+',
        total: 8,
      },
      {
        id: 4,
        letter: 'E',
        max: 8,
        min: 4,
        rightAnswer: false,
        sign: '-',
        total: 4,
      },
      {
        id: 5,
        letter: 'D',
        max: 8,
        min: 3,
        rightAnswer: false,
        sign: '-',
        total: 5,
      },
    ],
  },
];

// Insert the data into the database
Joke.insertMany(jokes)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
