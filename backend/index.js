const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve the APK file
app.get('/download', (req, res) => {
  const file = path.join(__dirname, '../mobile-app/fosha.apk');
  res.download(file);
});

app.get('/', (req, res) => {
  res.send('Hello, Fosha!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});