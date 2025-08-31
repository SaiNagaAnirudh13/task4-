// app.js
const express = require('express');
const app = express();

// Set the port for the server to listen on.
// It will use the environment variable PORT, or default to 5000.
const PORT = process.env.PORT || 5000;

// Define a route for the API endpoint.
// When a GET request is made to /api, it will send a "Hello, Azure!" response.
app.get('/api', (req, res) => {
  res.send('Hello, Azure!');
});

// Start the server and log the port it's running on.
app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
