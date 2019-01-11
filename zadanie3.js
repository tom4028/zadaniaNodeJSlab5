// const myFunc = async (str)=>{
//     return new Promise((resolve,reject)=>str ===undefined ? reject('No string') : resolve(str));
// }

const myFunc = async (str)=>!str ? 'No string' : str;
    


myFunc().then(res=>console.log(res)).catch(err=>console.log(err));

