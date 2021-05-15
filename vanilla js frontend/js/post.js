/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParams=()=>{
  const queryString = window.location.search;
  const urlParams=new URLSearchParams(queryString);

  return urlParams.get("id");
};
const getPost = () => {
    const postId=getPostIdParams();
    
    fetch(API_URL + postId,{
     method: 'GET'   
    }).then(response=> {
       return response.json();
    }).then(data=> buildPost(data))
}

const buildPost = (data) => {
   const imageUrl=API_BASE_URL+data[0].post_image;

   const newDate = new Date(parseInt(data[0].added_date)).toDateString();
   document.getElementById('individual-post-title').innerText=data[0].title;
   document.getElementById('individual-post-date').innerText=newDate;
   document.getElementById('individual-post-content').innerText=data[0].content;
   document.getElementById('post-header').style.backgroundImage=`url('${imageUrl}')`;
}
