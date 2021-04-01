/*"use strict";

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

// test image
var multer = require('multer');
//const { networkInterfaces } = require('os');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
        console.log(req.file)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});
const upload = multer({storage: storage});

app.get('/',(req,res)=>{
     res.render('home')
})
app.post('/',upload.any(),(req,res)=>{
    console.log('TITI',req.body)
    res.send('ok')
})
//*/