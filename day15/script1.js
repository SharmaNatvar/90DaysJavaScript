const getFoodPrice = (name) =>{
    if(name === 'mango'){
        console.log('price = 30 ');
    }
    else if(name === 'apple'){
        console.log('price = 100');
    }
    else if(name === 'grapes'){
        console.log('price = 40');
    }
    else{
        console.log('enter proper name');
    }
}

getFoodPrice('apple')


// 2 method

const getFoodPrice2 = (name) =>{
    const price = {
            'mango' : 30,
            'apple' : 100,
            'grapes' : 40
        }
    return price[name]
}

console.log(getFoodPrice2('apple'));