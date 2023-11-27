// let marks = [97,64,32,49,99,96,86];

// let returnMarks = marks.filter((val)=>{
//     if(val>90){
//         return val
//     }
// })

// console.log(returnMarks);


console.log('-----------------------------');

let userInput = prompt('enter your number');
// let userInput = 4+''
console.log(+userInput);

const arr = []

for (let i = 0; i < userInput; i++) {
    arr[i] = i+1
}

console.log(arr);

let sum = arr.reduce((res, curr)=>{
    return res + curr
})

console.log(sum);

let factor = arr.reduce((res, curr)=>{
    return res * curr
})

console.log(factor);