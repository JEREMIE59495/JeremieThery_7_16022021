const Avatar = require('../models/employee');
const employeeModel = require ('../models/employee');

//get tous les employées
exports.getEmployeeList = (req, res)=>{
   // console.log('ici la liste des  employées')
   employeeModel.getAllEmployees((err,employees)=>{
       if(err)
       res.send(err);
   //    console.log('Employees',employees);
        res.send(employees);
   })
}

// un seul employé deplaceé vers user controllers
exports.getOneEmployee =(req,res)=>{
   // console.log('cici' ,req.params)
    employeeModel.getOneEmployee(req.params.id, (err,employee)=>{
        if(err)
        res.send(err);
     //   console.log(req.params.id);
        res.send(employee);
    //  console.log(employee)
    })
}

//création new employee
exports.createNewEmployee = (req,res)=> {
    const imageUpdate = JSON.parse(req.body.avatar)
    const employeeReqData = new employeeModel(imageUpdate)
    console.log('employeeReqData',employeeReqData);
    if(req.body.constructor === Object && Object.keys(imageUpdate).lenght === 0){
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
    console.log('ctrl employee L48',employeeReqData.avatar);
    const imageUpdate = employeeReqData.avatar
    const img = new Avatar({
        ...imageUpdate,
        avatar: `${req.protocol}://${req.get('host')}/images/${employeeReqData.avatar}`,
        
    })
  console.log('ctrl employee L56',img.avatar)
  /* img.avatar.save()
    .then(()=> res.status(201).json({message:'obj enregistré'}))
    .catch(error =>res.status(400).json ({error}));
*/
    if(req.body.constructor === Object && Object.keys(req.body).lenght === 0){
        res.send(400).send({succes:false,message:'merci de remplir tous les champs'})
    }else{
        employeeModel.modifyEmployee(req.params.id, employeeReqData,(err, employee)=>{
            
            if(err)
                res.send(err);
                res.json({status: true, message: 'Employee modifié avec succès !!',data: employee})   
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