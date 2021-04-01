const multer = require('multer');


const MIME_TYPES ={
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'
}

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'uploads');
        console.log(file)
    },
   
    filename:(req,file,callback)=>{
        const name= file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        if(file.originalname.split('.')[1]){
            callback(null, Datenow() + '_'+ name + '.' + extension);
        }
    } 
    
});
module.exports = multer({storage:storage}).single('image');
