// Setup empty JS object to act as endpoint for all routes
let appData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`server running on lacalhost: ${port}`);
}
let weatherData = {};

app.get('/all', sendData)
function sendData (req, res) {
  res.send(weatherData);
}

app.post('/add', addZip);
function addZip(req,res){
  weatherData = req.body;
  res.send(weatherData);
  console.log(weatherData);
}