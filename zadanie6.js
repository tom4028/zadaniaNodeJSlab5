const axios = require('axios');

const urlMain = `https://jsonplaceholder.typicode.com/users/1`;

// const user = async (url)=> await axios(url);


// try{
//     user(urlMain).then(res=>console.log(res.data)).catch(err=>console.log("Error from user=>",err.response.status));
// }catch(err){
//     console.log("Error from catch=>",err);
    
// }

(async ()=>{
    await axios(urlMain).then(res=>console.log(res.data.name)).catch(err=>console.log(err.message));
})();
