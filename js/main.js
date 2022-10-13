const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response)=> {
    response.json
})
.then((jsonObject) => {
    const towns = jsonObject['towns'];
})
    for(let i =0; i <= towns.length; i++){
        if(towns[i].name == "Soda Springs"){
            
        }
    }
