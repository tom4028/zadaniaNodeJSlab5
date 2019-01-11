const divide = (a,b)=>b==0 ? new Error('Dzielenie przez 0') : (a/b).toFixed(2);

try{
    console.log(divide(1,7))
}catch(err){
    console.log(err);
}