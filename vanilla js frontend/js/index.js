const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL,{
        method:'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    let blogPostContent="";
     blogPosts.forEach(element => {
         const newDate = new Date(parseInt(element.added_date)).toDateString();
         const newPicture = API_BASE_URL + element.post_image;
         const postLink=`post.html?id=${element.id}`
         blogPostContent+=`
         <a class="post-link" href="${postLink}">
            <div class="post">
                <div class="post-image" style="background-image:url('${newPicture}')"></div>
                <div class="post-content">
                    <div class="post-date">${newDate}</div>
                    <div class="post-title"><h4>${element.title}</h4></div>
                    <div class="post-text">${element.content}</div>
                </div>
            </div>
         </a>`
     });  
     document.querySelector('.blog-posts').innerHTML=blogPostContent;
}
