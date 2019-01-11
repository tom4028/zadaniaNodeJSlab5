const axios = require('axios');

// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2
// Endpoint do postów: https://jsonplaceholder.typicode.com/posts?userId=2
// Endpoint do komentarzy: https://jsonplaceholder.typicode.com/comments?postId=11

const user = async()=>{
    await axios('https://jsonplaceholder.typicode.com/users/2')
        .then(res=>{console.log("User name: ",res.data.name);console.log("User email: ",res.data.email)})
        .catch(err=>console.log("Error from user: ",err.message));
}
const userPosts = async ()=>{
    await axios('https://jsonplaceholder.typicode.com/posts?userId=2')
        .then(res=>{console.log("Ilośc postów: ",res.data.length)})
        .catch(err=>console.log("Error from user: ",err.message));
}
const userComments = async ()=>{ 
    await axios('https://jsonplaceholder.typicode.com/comments?postId=11')
        .then(res=>{console.log("ilośc komentarzy użytkownika: ",res.data.length)})
        .catch(err=>console.log("Error from user: ",err.message));
};

try{
    user();
    userPosts();
    userComments();
}catch(err){
    console.log(err.message)
}