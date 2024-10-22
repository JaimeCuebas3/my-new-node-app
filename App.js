// Load environment variables from .env file 
require('dotenv').config(); 

const express = require('express'); 
const app = express();
const port = process.env.PORT || 3000;

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// New route for greeting
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest'; // Default to 'Guest' if no name is provided
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});