const stats = (arr) => {
    if(!Array.isArray(arr) || arr.lenght === 0){
        throw new Error('Input must be a non-empty array');
    }

    const numbers = arr.filter((num)=> typeof num === 'number');

    if(numbers.lenght === 0){
        throw new Error('Input array must contain only numbers');
    }

    const sum = numbers.reduce((acc , num) => acc + num , 0);
    const avg = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const count = numbers.length;

    return{
        count,sum,avg,max,min
    }
}

console.log(stats([20,30,50,22,44]));