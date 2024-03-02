const age = parseInt(prompt("enter your age"))

if(age<18){
    console.log('you get a 20% discount');
}
else if(age>=18 && age<=65){
    console.log('give full amount');
}
else{
    console.log("you get 30% discount");
}