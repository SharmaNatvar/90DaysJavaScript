async function apiData(pageNO){
    // console.log(page);
    let data = await fetch(`https://reqres.in/api/users?page=${pageNO}`)
    let dataJson = await data.json()
    let result = dataJson.data   // array 

    let htmlJsData = ''
    for(let i = 0; i<result.length; i++){
        htmlJsData = htmlJsData +    `<tr>`
        htmlJsData = htmlJsData +    `<td>${result[i]['id']}</td>`
        htmlJsData = htmlJsData +    `<td>${result[i]['email']}</td>`
        htmlJsData = htmlJsData +    `<td>${result[i]['first_name']}</td>`
        htmlJsData = htmlJsData +    `<td>${result[i]['last_name']}</td>`
        htmlJsData = htmlJsData +    `<td><img src='${result[i]['avatar']}'/></td>`
        htmlJsData = htmlJsData +    `</tr>`
    
    
    }
    document.getElementById('showResult').innerHTML = htmlJsData
    
}