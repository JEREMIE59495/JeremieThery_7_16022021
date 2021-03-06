const employeeModel = require ('../models/employee');

//get tous les employées
exports.getEmployeeList = (req, res)=>{
   // console.log('ici la liste des  employées')
   employeeModel.getAllEmployees((err,employees)=>{
       console.log('nous sommes ici');
       if(err)
       res.send(err);
       console.log('Employees',employees);
        res.send(employees);
   })
}

// un seul employé
exports.getOneEmployee =(req,res)=>{
    console.log('voir 1 employee')
    employeeModel.getOneEmployee(req.params.id, (err,employee)=>{
        if(err)
        res.send(err);
        console.log('single employe data',employee);
        res.send(employee);
        
    })
}

//création new employee

exports.createNewEmployee = (req,res)=> {
    const employeeReqData = new employeeModel(req.body);
    console.log('employeeReqData',employeeReqData);
    if(req.body.constructor === Object && Object.keys(req.body).lenght === 0){
        res.send(400).send({succes:false,message:'merci de remplir tous les champs'})
    }else{
        employeeModel.createEmployee(employeeReqData,(err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'Employee crée avec succès !!',data: employee})   
        })
    }
}


//modifier un employee

exports.modifyEmployee = (req,res)=>{
    const employeeReqData = new employeeModel(req.body);
    console.log('employeeReqData modify',employeeReqData);
    if(req.body.constructor === Object && Object.keys(req.body).lenght === 0){
        res.send(400).send({succes:false,message:'merci de remplir tous les champs'})
    }else{
        employeeModel.modifyEmployee(req.params.id, employeeReqData,(err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'Employee modifié avec succès !!'})   
        })
    }
}
//supprimer employe
exports.deleteEmployee=(req,res)=>{
    employeeModel.deleteEmployee(req.params.id, (err,employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message:'Employe supprimée'});
    })
}