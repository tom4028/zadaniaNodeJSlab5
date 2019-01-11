const axios = require('axios');

const url = (num)=>`https://jsonplaceholder.typicode.com/users/${num}`;

const user =  async (url) => await axios(url).then(res=>res.data.name).catch(err=>console.log("Error from user:",err.message));
const users =[
    user(url(2)),
    user(url(3)),
    user(url(5)),
    user(url(7)),
    user(url(8)),
    user(url(10)),
];



(async ()=>{
    try{
      let result = await user(url(2));
    console.log(result);
    }catch(err){
        console.log("Error message from tryCatch",err.message);
    }
})();
