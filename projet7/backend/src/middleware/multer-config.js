const multer = require('multer');

const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'
};

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'images');  
    },
    filename:(req,file,callback)=>{
        const name= file.originalname.split(' ').join('_');
        console.log('MULTER L15',req)
        const extension = MIME_TYPES[file.mimetype];
        if(file.originalname.split('.')[1]){
            callback(null, Datenow() + '_'+ name );
        } else{
            callback(null, Datenow() + '_'+ name + '.' + extension);
        }   console.log('DESTI=',file)

    } 
    
});
module.exports = multer({storage}).single('image');
