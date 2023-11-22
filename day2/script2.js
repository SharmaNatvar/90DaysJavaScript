console.log('for each function');

let arr = [1,2,3,4,5,6]

arr.forEach((val)=>{
    console.log(val*2);
})


console.log('use of map');

let sum = arr.map((val)=>{
    return val*2;
})
console.log(sum);