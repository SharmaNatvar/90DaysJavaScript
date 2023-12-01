// question
// there are two arrays one is of useres and othere
// is of cities they live in make a new array which 
// contains the unified data

// answer

const USERS = [
    {id:1 , userName:'Mike', age:31},
    {id:2 , userName:'Francis', age:39},
    {id:3 , userName:'Christina', age:30},
    {id:4 , userName:'Marian', age:37},
    {id:5 , userName:'Timothy', age:28}
]
 

const CITY = [
    {id:1 , city:'jaipur'},
    {id:2 , city:'siker'},
    {id:3 , city:'surat'},
    {id:4 , city:'delhi'},
    {id:5 , city:'nagor'}
]


let result = USERS.map((item) => ({...item , ...CITY.find((item2) => item.id === item2.id)} ))

console.log(result);


