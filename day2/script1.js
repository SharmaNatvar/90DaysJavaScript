let vowels = (msg) =>{
    // let users = [...msg]
    // console.log(users);
    let count = 0
    for(let user of msg){
        if(['a','e','i','o','u'].includes(user)){
            // console.log(user,'user');
            count++
        }
    }
    return count
}

let vowelsCount = vowels('natvarsharmanhi')

console.log(vowelsCount);

// -----------------------------------------

console.log('-----------------------------------------');
console.log('2nd method');

function vowelsNew(arr,target) {
    // console.log(typeof arr);
    // console.log(arr.length);
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==target){
            return i
        }
    }
    return '-1'
}

let returnValue = vowelsNew(['helo','krishna'],'e')
console.log(returnValue);
