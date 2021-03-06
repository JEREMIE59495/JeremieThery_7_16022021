var dbConnect =require('../../config/db.config');

const Employee = function(employee){
    this.first_name = this.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.password= employee.password 
}

//get all employee
Employee.getAllEmployees = (result)=>{
    dbConnect.query('SELECT * FROM employees',(err,res)=>{
        if(err){
            console.log('error while fetching employees',err);
            result(null,err);
        }else{
            console.log('Employee fetched succes !!');
            result(null,res);
        }
      
    })
}

//get One employee
Employee.getOneEmployee = (id, result )=>{
    dbConnect.query('SELECT * FROM employees WHERE id=?',id,(err,res)=>{
            if(err){
                console.log('error while fetching employees',err);
                result(null, err);
            }else{
             result(null,res);
            }
    })
}

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