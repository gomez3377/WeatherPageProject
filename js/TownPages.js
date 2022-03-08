//-----------------------------------Getting the Wind Chill Value--------------------------------------
let currentTemperature = parseFloat(document.querySelector(".currentTemperature").textContent);
let windSpeed = parseFloat(document.querySelector(".windSpeed").textContent);


let windChill =""
if (currentTemperature <= 50 && windSpeed > 3.0) {
  windChill = windChillFunc(currentTemperature, windSpeed) + "\u00B0F";
} 
else {
  windChill = "N/A";
}


document.querySelector(".windChill").innerHTML = windChill;