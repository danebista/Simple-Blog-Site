const PATH="./data.json"
const fs=require('fs');

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog(id){
    
      let posts=this.readData()
      console.log(posts.filter((post)=>{
        return post.id==id
      }))

      return posts.filter((post)=>{
        return post.id==id
      })
    }

    add(newPost){
       const currentPosts=this.readData();
       currentPosts.unshift(newPost);
       this.storeData(currentPosts);
    }

    readData(){
      let rawdata = fs.readFileSync(PATH);
      let posts = JSON.parse(rawdata)
      
      return posts
    }

    storeData(rawData){
        let data=JSON.stringify(rawData);
        fs.writeFileSync(PATH, data)
    }
}

module.exports= Post
