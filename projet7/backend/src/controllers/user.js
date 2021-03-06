const dbConnect = require('../../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup=(req, res)=>{
    console.log(req.body)
    
    const {first_name, last_name, email, password} = req.body;
    dbConnect.query('SELECT email FROM employees WHERE email =?',[email], async(error, result) =>{
        if(error){
            console.log(error);
        }
        if(result.length > 0){
            return res.render('signup',{
                message:'cette email est déjà utilisé'
            })
        }
        let hashedPassword = await bcrypt.hash(password,5)
    console.log(hashedPassword)
        dbConnect.query('INSERT INTO employees SET ?',{first_name: first_name, last_name: last_name, email: email, password: hashedPassword}, (error, result)=>{
            if(error){
                console.log(error);
            } else{
                console.log(result)
            }
        res.send('envoyer')
        });
    })
}

exports.login = async (req, res)=> {
    try{
        const { email, password} = req.body
            if(!email ||!password){
                console.log(req.body)
                 return res.status(401).json({error: "utilisateur n'est pas enregistré"})
             }
        

        dbConnect.query('SELECT * FROM employees WHERE email = ?', [email], async (error, result) =>{
            console.log(result)
            if(!result || !(await bcrypt.compare(password, result[0].password) )){
                res.status(401).render('login', {
                message:' Votre email ou votre mot de passe est incorrecte'
                })
            }else{
               const id = result[0].id;

               res.status(200).json({
                    token:jwt.sign(
                        {id:id},
                        'RANDOM_TOKEN_SECRET',
                        {expiresIn: '24h'} ,
                        console.log('bienvenue')
                    )
                })
            }
        })
    }catch(error){
        console.log(error)
    }
}
