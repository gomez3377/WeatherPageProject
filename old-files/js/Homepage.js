const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i <= 6; i++){
        if (towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven" || towns[i].name === "Preston") {

            let card = document.createElement('section');
            card.className = 'townSection';
            let townInfo = document.createElement('div');
            townInfo.className = "townInfoContainer";

            let townName = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let townImgContainer = document.createElement('picture');
            let townImgSource1 = document.createElement('source');
            let townImgSource2 = document.createElement('source');
            let townImgSource3 = document.createElement('source');
            let townImg = document.createElement('img');
            
            townName.textContent = towns[i].name;
            motto.textContent = towns[i].motto
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            
            townImgSource1.media = '(max-width: 200px)';
            townImgSource2.media = '(max-width: 500px)';
            townImgSource3.media = '(max-width: 800px)';
            townImg.alt = 'townImg';
            
            card.appendChild(townInfo)
            townInfo.appendChild(townName);
            townInfo.appendChild(motto);
            townInfo.appendChild(yearFounded);
            townInfo.appendChild(population);
            townInfo.appendChild(rainfall);

            card.appendChild(townImgContainer);
            townImgContainer.appendChild(townImg);
            townImgContainer.appendChild(townImgSource1);
            townImgContainer.appendChild(townImgSource2);
            townImgContainer.appendChild(townImgSource3);

            if (towns[i].name === "Soda Springs") {
                townImgSource2.srcset="images/sodaSpringImages/heroImage500.jpg";
                townImgSource1.srcset="images/sodaSpringImages/heroImage200.jpg";
                townImgSource3.srcset="images/sodaSpringImages/heroImage800.jpg";
                townImg.src="images/sodaSpringImages/heroImage1280.jpg";
            }
            if (towns[i].name === "Fish Haven") {
                townImgSource1.srcset="images/fishHavenImages/heroImage200.jpg";
                townImgSource2.srcset="images/fishHavenImages/heroImage500.jpg";
                townImgSource3.srcset="images/fishHavenImages/heroImage800.jpg";
                townImg.src="images/fishHavenImages/heroImage1280.jpg";
            }
            
            if (towns[i].name === "Preston") {
                townImgSource1.srcset="images/prestonImages/heroImage200.jpg";
                townImgSource2.srcset="images/prestonImages/heroImage500.jpg";
                townImgSource3.srcset="images/prestonImages/heroImage800.jpg";
                townImg.src="images/prestonImages/heroImage1280.jpg";
            }
            document.querySelector('div.townCards').appendChild(card);
        }
    }


});


function toggleMenu() {
    
    document.querySelector(".homeNav").classList.toggle("hide");
    document.querySelector(".top").classList.toggle("active");
    document.querySelector(".middle").classList.toggle("active");
    document.querySelector(".bottom").classList.toggle("active");
}