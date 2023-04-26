const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jokesRoutes = require('./routes/jokes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express(); 
 
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the Joke Decoder API');
// });

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// Use the jokes routes
app.use('/api/jokes', jokesRoutes);
