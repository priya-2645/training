//accumulator
const x = [3,4,8,9,6];
const result = x.reduce((acc, ele) => {
    const type = ele % 2 === 0 ? 'even' : 'odd';
  acc[type].push(ele);
  return acc;
}, { odd: [], even: [] });
console.log( result);
//bonus
const x=[3,4,8,9,6];
const bonus=100;
const result = x.reduce((acc, ele) => {
    acc= acc+ele;
    console.log(acc);
    return acc;
},bonus);