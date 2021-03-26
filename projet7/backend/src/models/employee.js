var dbConnect =require('../../config/db.config');
//var result = require('../controllers/employee')
const bcrypt = require('bcrypt')
 

const Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.password = employee.password 
    this.avatar = employee.avatar
}


//get all employee
Employee.getAllEmployees = (result)=>{
    dbConnect.query('SELECT * FROM employees',(err,res)=>{
        if(err){
            console.log('error while fetching employees',err);
            result(null,err);
        }else{
            console.log('Données employees chargées avec succes !!');
            result(null,res);
        }
      
    })
}

Employee.getOneEmployee = (req,result )=>{
//    console.log('recup back model emplo L29',req)
            dbConnect.query('SELECT * FROM employees WHERE id=?',[req],(err,res)=>{
            if(err){
                console.log('error while fetching employees',err);
                result(null, err);
            }else{
              console.log('ctrl employee L36',res)
            result(null,res);
            }
        })
},
         

//création new models

Employee.createEmployee = (employeeReqData, result)=>{
    dbConnect.query('INSERT INTO employees SET ?', employeeReqData,(err,res)=>{
        if(err){
            console.log('err insertion datas');
            result(null,err);
        }else{
            console.log('employee crée avec succès');
            result(null,res)
        }
      
    })
}

//modifier employé

Employee.modifyEmployee=(id,employeeReqData, result)=>{
    dbConnect.query('SELECT password FROM employees WHERE id=?',id,(err,res)=>{
        //console.log(result);
        //console.log(employeeReqData.password)
        bcrypt.compare ( employeeReqData.password ,res[0].password) . then ( function ( result )  { 
            if(result == true){ 
                console.log('Mot de passe identique')
                let hashedPassword =  bcrypt.hashSync(employeeReqData.password,5)
                dbConnect.query("UPDATE employees SET first_name=?, last_name=?, email=? ,password=?, avatar=? WHERE id = ?",
                [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,hashedPassword,employeeReqData.avatar,id],(err, res)=>{
                    if(err){
                        console.log('erreur lors de la modification');
                       // result(null,err);
                    }else{
                        console.log('modification effectuer');
                        console.log('model employee L76' ,employeeReqData.avatar)
                        //result(null,res)
                    }
                })
            }else if(result == false){ 
                console.log('mot de passe incorrect')
               return err 
            }
        })
    }) 
},

//supprime employer
Employee.deleteEmployee=(id, result)=>{
    dbConnect.query('DELETE FROM employees WHERE id=?',[id],(err,res)=>{
        if(err){
            console.log('erreur de supression');
            result(null, err);
        }else{
            result(null,res);
        }
    })
}
module.exports = Employee;