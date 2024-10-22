/**
 * Import function triggers from their respective submodules:
 */
const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors"); // Import CORS
const logger = require("firebase-functions/logger");

// Initialize CORS
const corsOptions = {
  origin: true, // Allow all origins
};

// Hello World function
exports.helloWorld = onRequest((request, response) => {
  cors(corsOptions)(request, response, () => {
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
  });
});

// Greeting function
exports.greetUser = onRequest((request, response) => {
  cors(corsOptions)(request, response, () => {
    const name = request.query.name || "Guest";
    logger.info(`Greeting request received for: ${name}`,
        {structuredData: true});
    response.send(`Hello, ${name}!`);
  });
});
