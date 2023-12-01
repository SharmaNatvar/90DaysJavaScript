// question
// given an array of object with a numerical 
// property implement a funtion to sort the 
// object based on that property. additionally 
// add a ranking to each object based on its 
// position in the sorted array 

// answer

const PRICES = [
    {id:1, marks:96 },
    {id:2, marks:81 },
    {id:3, marks:86 },
    {id:4, marks:91 },
    {id:5, marks:90 },
    {id:6, marks:89 },
    {id:7, marks:94 }
]

let ans = [...PRICES].sort((a,b) => b.marks - a.marks).map((item, index) => ({...item, rank:index+1}))

console.log(ans);
