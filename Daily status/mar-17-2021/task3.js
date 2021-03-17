var x=[1,'1','Name',[1,2],true];
var result=x.map((a)=>{
  return(typeof(a));
})
console.log(result); // op:number,string,string,object,boolean

//splice
var beverages=["tea","coffee","shakes","milk","lassi"];
beverages.splice(3,0,"juice");
console.log(beverages); 
//slice
 console.log(beverages.slice(3));
//pop
beverages.pop();
console.log(beverages);
//push
beverages.push("juice");
console.log(beverages);
//shift
beverages.shift();
console.log(beverages);
//unshift
beverages.unshift("juice");
console.log(beverages);
//delete
delete beverages[0];
console.log(beverages);
//sort
beverages.sort();
console.log(beverages);
//reverse
console.log(beverages.reverse());
//tostring
console.log(beverages.toString());
//join
console.log(beverages.join("+"));
//numeric sort
var x=[10,50,100,90,70];
x.sort(function(a, b){return a - b});
console.log(x);
