var arr=[1,2,3,4];
const x=arr.map((y)=> {
    if(y<3)
    return y;
})
console.log(x); //Map

const x=arr.filter((y)=>{
    return y<3;
})
console.log(x); //Filter
const x = arr.find((y) => {
  return y===2;
 });
 console.log(x); //Find

 const x= arr.findIndex((y)=>{
     return y===3;
 });
 console.log(x);//findIndex

 const x=arr.some((y)=>{
     return y<4;
 })
 console.log(x);//some
const x=arr.every((y)=>{
    return y<4;
})
console.log(x);//every

const x=arr.forEach((y)=>{
    return y>3;
})
console.log(x);//forEach