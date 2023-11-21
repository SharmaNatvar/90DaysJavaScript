let classMarks = [1,2,3,4,5]
let total = 0
for(let marks of classMarks){
    total+=marks
}
console.log(total);
let avr = total/classMarks.length
console.log(avr);




// ----------------------------------------

console.log("----------------------------------------");


let prices = [100,200,300,400,500]
// let newPrice 

for(let i = 0; i < prices.length; i++){
    let newPrice = prices[i]*10/100
    prices[i]-=newPrice
    console.log(prices[i]);
}
console.log(prices);
