const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
const util = require('util');
util.inspect.defaultOptions.maxArrayLength = null;

app.use(bodyParser.json({ type: 'application/json' }))
// app.use(app.router);
app.use(cors({credentials: true, origin: true}));
app.options('*', cors())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(path.join(__dirname + '/public/index.html'));
  next();
})

// ********************************************************************************************************************************
// ********************************************************************************************************************************

// ********************************************************************************************************************************
// ********************************************************************************************************************************


// app.listen(4000, () => {
//   console.log('listening on port 4000');
// })




// ********************************************************************************************************************************
