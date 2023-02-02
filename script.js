const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd18910a12msh4a1346014f9c7dcp1b94d3jsn0d3e38c9f29e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


getWeather = (city) => {
	cityName.innerHTML = city;

  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      // min_temp2.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      // max_temp2.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
	
};
// let searchInputBox = document.getElementById('cityName');
// searchInputBox.addEventListener(`keypress`, (event) => {
// 	// e.preventDefault();
    
// 	if (event.keyCode == 13) {
//         // console.log(searchInputBox.value);
//         getWeatherReport(searchInputBox.value);
        
//     }
        
    
// })
submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
  });
getWeather("delhi");
