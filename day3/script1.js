// rest Parameter

let total = 0

function sumArray(...num){
    
    for(let number of num){
        total+=number
        console.log(number);
    }
    return total
}

let ans = sumArray(1,2,3,4,5)

console.log(ans, 'answer');