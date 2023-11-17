const express = require('express');
const app = express();

// Define a route to handle GET requests
app.get('/', (req, res) => {
  const name = 'youssef sameh';
  res.send(name);
});

// Start the server
const port = 3000; // Choose the desired port number
app.listen(port, () => {
  console.log("youssef sameh");
});