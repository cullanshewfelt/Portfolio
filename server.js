const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
const util = require('util');
const port = process.env.PORT || 3000;


util.inspect.defaultOptions.maxArrayLength = null;

app.use(express.static(path.join(__dirname, 'public/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

// ********************************************************************************************************************************
// ********************************************************************************************************************************

// ********************************************************************************************************************************
// ********************************************************************************************************************************


app.listen(port, () => {
  console.log('Server is up at ', port);
})




// ********************************************************************************************************************************
