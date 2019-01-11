const axios = require('axios');

const str ='Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather? appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}'

const url = (num)=>`https://jsonplaceholder.typicode.com/users/${num}`;
const weatherUrl = (geo)=>`https://api.openweathermap.org/data/2.5/weather? appid=5c93c428e6adf538aadd8d533068be7b&lat={${geo.lat}}&lon={${geo.lng}}`;

const user =  async (url) => await axios(url).then(res=>res.data.address.geo).catch(err=>console.log("Error from user:",err.message));



axios(`https://api.openweathermap.org/data/2.5/weather? appid=caed638eacc4e7dabf8dcb7fa2fbc7e4&lat=53.41&lon=21.93`).then(res=>console.log(res)).catch(err=>console.log(err));

// (async ()=>{
//     try{
//         let geo = await user(url(2));
//         let temp = await axios(weatherUrl(geo));
//         console.log(temp);
//     }catch(err){
//         console.log("Error message from tryCatch",err.message);
//     }
// })();
