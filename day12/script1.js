function check(event) {
    let pass = document.getElementById('pass');
    if(event.value > 0){
        if(event.value != pass.value){
            document.getElementById('alert').innerHTML = 'password not match'
        }else{
            document.getElementById('alert').innerHTML = ''

        }
    }
    else{
        document.getElementById('alert').innerHTML = 'plase enter pass'
    }
    console.log(event.value ,'hay');
    console.log(pass.value,'hay');
}