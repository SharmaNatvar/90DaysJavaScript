async function apiData(pageNO){
    // console.log(page);
    let data = await fetch(`https://reqres.in/api/users?page=${pageNO}`)
    let dataJson = await data.json()
    console.log(dataJson);
    let result = dataJson.data
    console.table(result)
    console.log(result[0]['id']);
    for(let i = 0; i<result.length; i++){
        let htmlJsData = `<tr>
                        <td>${result[i]['id']}</td>
                        <td>${result[i]['email']}</td>
                        <td>${result[i]['first_name']}</td>
                        <td>${result[i]['last_name']}</td>
                        <td><img src='${result[i]['avatar']}'/></td>
                    </tr>`

    document.getElementById('showResult').innerHTML += htmlJsData

    }



// console.log(res.json());
}