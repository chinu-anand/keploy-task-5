const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '/')));