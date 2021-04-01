const express = require ('express');
//const bodyParser = require('body-parser')
const app = express();
//const path =require('path')


const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-type,  Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.urlencoded({extended:false}));
app.use(express.json())

//Definie la route racine
app.get('/',(req,res)=>{
    res.send('Hello World');
});

//import route employee
const employeeRoutes = require('./src/routes/employee');
const publicationRoutes = require('./src/routes/publication');
const groupeRoutes = require('./src/routes/groupe');
const userRoutes= require('./src/routes/user')

//app.use ('/uploads',express.static(path.join(__dirname,'uploads')));


//create route employee
app.use('/api/employee',employeeRoutes)
app.use('/api/publication',publicationRoutes)
app.use('/api/groupe',groupeRoutes)
app.use('/api/auth',userRoutes)

//Ecoute du port
app.listen(port,()=>{
    console.log(`Express server is running at port ${port}`);
});


// test image
var multer = require('multer');
//const { networkInterfaces } = require('os');
const file='toto'
var storage = multer.diskStorage({
  
    destination: function (req, file, cb) { 
        cb(null, './uploads')
       console.log('ICI',file)
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
//
