const dbConnect = require('../../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const toto = require ('../models/password');


exports.signup=(req, res)=>{
    const {first_name, last_name, email, password, isAdmin} = req.body;

    //console.log(req.body.password)
    dbConnect.query('SELECT email FROM employees WHERE email =?',[email], async(error, result) =>{
        if(error){
            console.log(error); 
            res.status(401).json({message:"erreur"})     
        }
        if(result.length > 0){ 
             res.status(401).json({message:"Cette email est déjà utilisée"})

    console.log(req.body.password)
    dbConnect.query('SELECT email FROM employees WHERE email =?',[email], async(error, result) =>{
        if(error){
            console.log(error); 
            return res.status(401).json({message:"erreur"})     
        }
        if(result.length > 0){ 
            return res.status(401).json({message:"Cette email est déjà utilisée"})

        }
        let hashedPassword = await bcrypt.hash(password,5)
       // console.log(hashedPassword)
        dbConnect.query('INSERT INTO employees SET ?',{first_name: first_name, last_name: last_name, email: email, password: hashedPassword, isAdmin:'0'}, (error, result)=>{
            if(error){
                //console.log(error);
            } else{
               // console.log(result)
            }
            res.send('envoyer')
        });
    })
}

exports.login = async (req, res)=> {
    try{
        const { email, password} = req.body  
              console.log(req.body)
            if(!email ||!password){
                return res.status(401).json({message:"utilisateur n'est pas enregistré"})      
             }
        dbConnect.query('SELECT * FROM employees WHERE email = ?', [email], async (error, result) =>{

            // console.log( 'ctrl.user ligne 37' , result)    

          // console.log( 'retour console.log ctrl.user ligne 41 : ' , result)
           //return res.status(200).json({result:result})      

            if(!result || !(await bcrypt.compare(password, result[0].password) )){
                res.status(401).json({message:' Votre email ou votre mot de passe est incorrecte'})
            }else{
                const id = result[0].id;
                console.log(id)
                res.status(200).json({
                    token:jwt.sign(
                        {id:id},
                        'RANDOM_TOKEN_SECRET',
                        {expiresIn: '24h'} ,
                      //  console.log('id ctrl.user ligne 54 : ' , id)
                    ),
                })   
            }
             return result
        })
    }catch(error){
        console.log(error)
    }  
}



