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