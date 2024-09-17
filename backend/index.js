const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

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
  // Add your registration logic here
  res.json({ success: true });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Add your login logic here
  res.json({ success: true });
});

app.get('/', (req, res) => {
  res.send('Hello, Fosha!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

