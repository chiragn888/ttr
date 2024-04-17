// Importing Express library
const express = require('express');

// Creating an instance of express to set up the web server
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route to test the server setup
app.get('/', (req, res) => {
  res.send('Welcome to the TrueUp Tech Jobs API!');
});

// Define the port the server will listen on
const PORT = process.env.PORT || 3001;

// Making the server listen on the predefined port and adding basic error handling
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Attach error handling for the server
server.on('error', (error) => {
  console.error('Error occurred starting the server: ', error);
});
```