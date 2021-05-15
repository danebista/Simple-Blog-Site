const Post=require("../api/models/post");
const postsData = new Post();

getPosts=async (req, res)=>{
    await res.status(200).send(postsData.get());
}

getIndivisualPosts= async (req,res)=>{
    
    const foundpost=postsData.getIndividualBlog(req.params.ids);

    if (foundpost.length){
       await res.status(200).send(foundpost)
    }
    else{
       await res.status(404).send("The record with the given id does not exist");
    }
}

createPost=(req,res)=>{
   console.log(req.file);
   
    const newPost={
        "id":`${Date.now()}`,
        "title":req.body.title,
        "content": req.body.content,
        "post_image":`uploads/${req.file.filename}`,
        "added_date": `${Date.now()}`
    }
    postsData.add(newPost);
    res.status(201).send("Data posting here");
}

module.exports= {
    getPost: getPosts,
    getIndivisualPost:getIndivisualPosts,
    createPosts: createPost
}
