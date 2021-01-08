const express = require('express')
const app = express()
const port = 3001
const handlebars = require('./handlebars');
var path = require('path');
const defaultData = require('./default-data');

app.get('/', (req, res) => {
  const data = {
    ...defaultData,
    ...req.query
  };
  const template = handlebars.template();
  res.send(template(data));
})

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`Front end Developer app listening at http://localhost:${port}`)
})
