function check(event) {
    let pass = document.getElementById('pass');
    let flag = 1
    if(event.value < 0){
        if(event.value != pass.value){
            document.getElementById('alert').innerHTML = 'password not match';
            flag = 0;
        }else{
            document.getElementById('alert').innerHTML = '';
            flag = 1;

        }
    }
    else{
        document.getElementById('alert').innerHTML = 'plase enter pass';
        flag = 0
    }
    console.log(event.value ,'hay');
    console.log(pass.value,'hay');
}

function validata(){
    if(flag == 1){
        return true;
    }
    else{
        return false
    }
} 