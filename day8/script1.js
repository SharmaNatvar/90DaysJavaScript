function parent(){
    let x = 10;
    let y;
    console.log( y = 20 , 'y value');
    return (function child(){
        console.log(x , 'childFun');
    })

}

let parentFunction = parent()

console.log(parentFunction , 'parentFun');

let childFun = parentFunction()