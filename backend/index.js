const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Temporary in-memory user store (replace with database later)
const users = [];

app.use(bodyParser.json());
app.use(cors());

// Serve the APK file
app.get('/download', (req, res) => {
  const file = path.join(__dirname, '../mobile-app/fosha.apk');
  res.download(file);
});

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  // Register the user
  users.push({ username, password });
  return res.json({ success: true, message: 'Registration successful' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(user => user.username === username);

  // If user is not found or password doesn't match, return an error
  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  // If credentials match, return success
  return res.json({ success: true, message: 'Login successful' });
});

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Hello, Fosha!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

