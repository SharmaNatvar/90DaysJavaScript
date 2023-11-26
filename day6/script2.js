// wap tp print sum of salaries of all employes

// emps = [
//     {name:'amit', salary:20000},
//     {name:'bhushan', salary:30000},
//     {name:'chaitali',age:21 , city:'nagpur', salary:50000},
// ]


// let sum =0;
// for (let i = 0; i < emps.length; i++) {
//     const element = (emps[i].salary);
//     sum += element
// }

// console.log(sum);


emps = [
    {name:'amit', salary:20000},
    {name:'bhushan', salary:15000},
    {name:'chaitali', salary:50000},
    {name:'ritesh', salary:35000},
    {name:'tejas', salary:40000},
]

let sum =0;
for (let i = 0; i < emps.length; i++) {
    const element = (emps[i].salary);
    sum = element*12
    console.log(sum);
    if(sum < 300000){
        console.log(emps[i].name,'less than 300000');
    }
    else if(sum > 300000 && sum < 500000){
        let tax = emps[i].salary
        tax*10/100
        // console.log(tax);
        console.log(emps[i].name , 'your income tax is ' , tax);
    }
    else if(sum > 500000 && sum < 1000000){
        let tax = emps[i].salary
        tax*20/100
        // console.log(tax);
        console.log(emps[i].name , 'your income tax is ' , tax);
    }
    else if(sum < 1000000){
        let tax = emps[i].salary
        tax*30/100
        // console.log(tax);
        console.log(emps[i].name , 'your income tax is ' , tax);
    }
}
