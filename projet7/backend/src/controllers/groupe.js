const groupeModel = require ('../models/groupe');


//get tous groupes
exports.getAllGroupe = (req, res)=>{
    // console.log('ici la liste des  employées')
    groupeModel.getAllGroupe((err,groupelist)=>{
        console.log('nous sommes ici');
        if(err)
        res.send(err);
        console.log('Groupelist',groupelist);
         res.send(groupelist);
    })
 }
//création new groupe

exports.createNewGroupe = (req,res)=> {
    console.log(req.body)
    const groupeReqData = new groupeModel(req.body);
    console.log('groupeReqData',groupeReqData);
    if(req.body.constructor === Object && Object.keys(req.body).lenght === 0){
        res.send(400).send({succes:false,message:'merci de remplir tous les champs'})
    }else{
        groupeModel.createGroupe(groupeReqData,(err, groupe)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'groupe crée avec succès !!',data: groupe})   
        })
    }
}
/*
exports.createNewGroupe = (req,res)=>{
    const groupObject = new groupModel(req.body);
    const newGroup = new group ({
        ...groupObject,
});
console.log (newGroup)
newGroup.save()
.then(() => res.status(201).json(console.log(newGroup)))
.catch(error => res.status(400).json({error}));
};
*/
//supprimer employe
exports.deleteGroupe=(req,res)=>{
    groupeModel.deleteGroupe(req.params.id, (err,groupe)=>{
        if(err)
        res.send(err);
        res.json({success:true, message:'groupe supprimée'});
    })
}