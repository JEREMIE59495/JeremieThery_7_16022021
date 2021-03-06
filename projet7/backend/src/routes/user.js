const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
//const password = require('../middleware/ password');
/*
router.post('/', (req, res, next)=> {
    // do something w/ req.body or req.files 
}); *///avoir aud dessus car plus d'erreur mais pas d envoi

router.post('/signup', userCtrl.signup);
router.post('/login',userCtrl.login);
/*
router.post('/login', (req, res , next) =>{
    res.json(req.body)
})*/
module.exports = router;

 