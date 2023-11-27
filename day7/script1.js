function submit() {
    let r = document.getElementById('userValue').value
    const pi = 3.14
    console.log(+r);

    document.getElementById('result').innerHTML = pi*r**2
}