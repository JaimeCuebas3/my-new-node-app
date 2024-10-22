// Load environment variables from .env file 
require('dotenv').config(); 

const express = require('express'); 
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route for greeting
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

