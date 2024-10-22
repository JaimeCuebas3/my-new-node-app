// Load environment variables from .env file 
require('dotenv').config(); 

const express = require('express'); 
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Route for Hello World
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route for greeting
app.post('/greet', (req, res) => {
    const name = req.body.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

