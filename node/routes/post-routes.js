const express= require('express');
router= express.Router();
const multer= require('multer');
const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './uploads')
    },
    filename: (req,file,cb)=>{
        cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
})
const upload= multer({storage: storage});

const {getPost, getIndivisualPost, createPosts}= require("../controllers/postreq");

const getExt=(mimeType)=>{
    switch(mimeType){
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpeg"
        case "image/jpg":
            return ".jpg";
    }
}
router.get('/posts', getPost);
router.get('/posts/:ids', getIndivisualPost);

router.post('/posts', upload.single("post-image"),createPosts);

module.exports=router;
 