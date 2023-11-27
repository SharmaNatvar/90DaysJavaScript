
    async function callApi(){
        console.log('hay');
        let dataApi = await fetch('https://reqres.in/api/users?page=2');
        console.log(dataApi); 
        let data = await dataApi.json()
        console.log(data)
        let newArray = data.data
        console.log(Array.isArray(newArray));
        document.getElementById('hello').innerHTML = newArray.map((event)=>{
            return (`<p>${event.id}</p>
            <p>${event.email}</p><p>${event.first_name}</p><img src='${event.avatar}'/>`)
            console.log(event);
        })
    }

    callApi()