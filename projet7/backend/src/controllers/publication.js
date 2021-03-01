const publicationModel = require ('../models/publication');

//get toutes les publications
exports.getAllPublication = (req, res)=>{
   // console.log('ici la liste des  publication')
   publicationModel.getAllPublication((err,publication)=>{
       console.log('nous sommes ici');
       if(err)
       res.send(err);
       console.log('publication',publication);
        res.send(publication);
   })
}

 

//création new publication

exports.createNewPublication = (req,res)=> {
    const publicationReqData = new publicationModel(req.body);
    console.log('publicationReqData',publicationReqData);
    if(req.body.constructor === Object && Object.keys(req.body).lenght === 0){
        res.send(400).send({succes:false,message:'merci de remplir tous les champs'})
    }else{
        publicationModel.createPublication(publicationReqData,(err, publication)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'commentaire crée avec succès !!',data: publication})   
        })
    }
}
//modifier un employee

exports.modifyPublication = (req,res)=>{
    const publicationReqData = new publicationModel(req.body);
    console.log('publicationReqData modify',publicationReqData);
    if(req.body.constructor === Object && Object.keys(req.body).lenght === 0){
        res.send(400).send({succes:false,message:'merci de remplir tous les champs'})
    }else{
        publicationModel.modifyPublication(req.params.id, publicationReqData,(err, publication)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'publication modifié avec succès !!'})   
        })
    }
}

//supprimer employe
exports.deletePublication=(req,res)=>{
    publicationModel.deletePublication(req.params.id, (err,employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message:'publication supprimée'});
    })
}