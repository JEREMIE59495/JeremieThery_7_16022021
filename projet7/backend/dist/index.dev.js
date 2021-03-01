"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
  extended: false
})); //Definie la route racine

app.get('/', function (req, res) {
  res.send('Hello World');
}); //import route employee

var employeeRoutes = require('./src/routes/employee');

var publicationRoutes = require('./src/routes/publication');

var groupeRoutes = require('./src/routes/groupe'); //create route employee


app.use('/api/employee', employeeRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/groupe', groupeRoutes);
app.use(bodyParser.json()); //Ecoute du port

app.listen(port, function () {
  console.log("Express server is running at port ".concat(port));
});