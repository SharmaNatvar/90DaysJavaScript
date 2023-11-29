let cont = 0;

setInterval(() => {
    document.getElementById('count').innerHTML = cont++
    if(cont === 10){
        document.getElementById("btn").style.display = 'block';
    }
},1000);

console.log(cont);