// wap to print sum of all element of array using for loop

// arr = [1,2,3,4,5,6]

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]   
//     console.log(sum);
// }

// console.log(sum);


// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         sum+=arr[i]
//     }
// }

// console.log(sum);



// wap to print gst of 5 mobile prices

let mobile = [100,200,300,400];
let sum = 0;

for (let i = 0; i < mobile.length; i++) {
    let sum = (mobile[i]*18)/100
    console.log(`prices ${mobile[i]} , gst ${sum} , total= ${mobile[i]+sum}`);
}

console.log(mobile);