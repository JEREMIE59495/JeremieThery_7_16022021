var dbConnect =require('../../config/db.config');

const Publication = function(publication){
    this.title = publication.title;
    this.comment = publication.comment;
    this.id_groupe = publication.id_groupe;
    this.auteur = publication.auteur;
}

//get all employee
Publication.getAllPublication = (result)=>{
    dbConnect.query('SELECT * FROM publication',(err,res)=>{
        if(err){
            console.log('error while fetching publication',err);
            result(null,err);
        }else{
            console.log('Publication fetched succes !!');
            result(null,res);
        }
    })
}

Publication.getOnepublication = (req,result )=>{
    //console.log('recup back model publi L29',req)
    dbConnect.query('SELECT * FROM publication WHERE id_groupe=?',[req],(err,res)=>{
        if(err){
            //   console.log('error while fetching employees',err);
            result(null, err);
        }else{    
            result(null,res);
        }
    })
},

//création new models

Publication.createPublication = (publicationReqData, result)=>{
    dbConnect.query('INSERT INTO publication SET ?', publicationReqData,(err,res)=>{
        if(err){
        //    console.log(publicationReqData)
            console.log('err insertion data');
            result(null,err);
        }else{
            console.log('publication crée avec succès');
            result(null,res)
        }
    })
}

//modifier publication
Publication.modifyPublication=(id,publicationReqData, result)=>{
    dbConnect.query("UPDATE publication SET title=?, comment=? WHERE id = ?",
     [publicationReqData.title,publicationReqData.comment,id],(err, res)=>{
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
Publication.deletePublication=(id, result)=>{
    dbConnect.query('DELETE FROM publication WHERE id=?',[id],(err,res)=>{
        if(err){
            console.log('erreur de supression');
            result(null, err);
        }else{
            result(null,res);
        }
    })
}
module.exports = Publication;