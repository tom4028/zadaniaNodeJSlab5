const add = async (a,b)=>(a+b)%2 ==0 ? new Error('Liczba parzysta') : "Liczba nieparzysta";

add(2,2).then(res=>console.log(res)).catch(err=>console.log(err));