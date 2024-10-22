/**
 * Import function triggers from their respective submodules:
 */
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Hello World function
exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Greeting function
exports.greetUser = onRequest((request, response) => {
  const name = request.query.name || "Guest";
  logger.info(`Greeting request received for: ${name}`, {structuredData: true});
  response.send(`Hello, ${name}!`);
});
