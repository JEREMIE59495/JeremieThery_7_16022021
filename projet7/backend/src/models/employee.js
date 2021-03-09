var dbConnect =require('../../config/db.config');
var result = require('../controllers/user')

const Employee = function(employee){
    this.first_name = result.first_name;
    this.last_name = resul.temployee.last_name;
    this.email = result.employee.email;
    this.password= result.employee.password 
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
//console.log('tatata',id)
//get One employee
var userId={userId}
          console.log('tatata',userId)
Employee.getOneEmployee = (req,result )=>{
 // var userId={userId}
          console.log(req)
          
            dbConnect.query('SELECT * FROM employees WHERE id=?',[req],(err,res)=>{
            if(err){
                console.log('error while fetching employees',err);
                result(null, err);
            }else{
              
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

//mofier employé
Employee.modifyEmployee=(id,employeeReqData, result)=>{
    dbConnect.query("UPDATE employees SET first_name=?, last_name=?, email=? ,status=? ,password=? WHERE id = ?",
     [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.status,employeeReqData.password,id],(err, res)=>{
        if(err){
            console.log('erreur lors de la modification');
            result(null,err);
        }else{
            console.log('modification effectuer');
            result(null,res);

        }
    })
}
  
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