const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('public'));

const jsonDataPath = path.join(__dirname, 'data.json');


app.get('/data', (req, res) => {

  fs.readFile(jsonDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).send('Internal Server Error');
    }
 
    const jsonData = JSON.parse(data);
   
    res.json(jsonData);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
