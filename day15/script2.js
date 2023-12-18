const food =[
    {
        'name': 'apple',
        'price':100,
        'group' : 1
    },
    {
        'name': 'mango',
        'price':80,
        'group' : 2
    },
    {
        'name': 'chiku',
        'price':60,
        'group' : 3
    },
    {
        'name': 'banana',
        'price':90,
        'group' : 1
    }
]

const names = [];

for (let i = 0 ; i < food.length ; i++){
    if(food[i].group === 1){
        names.push(food[i].name)
    }
}

console.log(names);


 const name2 = food
.filter((foods)=>foods.group === 1)
.map((foods) => foods.name)

console.log(name2);