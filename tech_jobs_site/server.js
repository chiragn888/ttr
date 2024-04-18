// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port number as 3000 or from environment variable for flexibility
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up a route to serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```