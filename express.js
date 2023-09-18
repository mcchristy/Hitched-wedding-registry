const express = require('express');
const bodyParser = require('body');
const app = express();
const port = process.env.PORT || 3000; 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('wedding registry');
});

app.listen(port, () => {
  console.log(`Server is running' ${port}`);
});


