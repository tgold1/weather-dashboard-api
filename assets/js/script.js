var APIKey = "1a6e242c584145cebf5c8827e5e6e268";
var latitude = "39.9551221447199";
var longitude = "-75.16952831929365";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=39.9551221447199&lon=-75.16952831929365&appid=1a6e242c584145cebf5c8827e5e6e268&units=imperial";
var cityLocation; 
var searchCity = JSON.parse(localStorage.getItem("cityView"));
console.log(searchCity)

var Searchbutton = document.querySelector(".Search");
var forecastView = document.querySelector(".forecastView");
function getWeather(data) {
var cityLocation = document.querySelector("#cityLocation");
var Temperature = document.querySelector("#Temperature");
var Windspeed = document.querySelector("#Windspeed");
var Humidity = document.querySelector("#Humidity") ; 
  console.log(data);
  cityLocation.textContent= data.city.Location;
  Temperature.textContent="Temperature:" + data.list[0].main.Temperature + "degrees";
  Windspeed.textContent="Windspeed:" + data.list[0].Windspeed + "mph";
  Humidity.textContent="Humidity:" + data.list[0].main.Humidity + "%";
}
function getAPI(queryURL) {
fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getWeather(data);
      localStorage.setItem("cityView",JSON.stringify(data));
     
    });
    Searchbutton.addEventListener('click' , function (event) {
      console.log(forecastView.value)
      getAPI(forecastView.value)
    
    })
   
    
    
    getAPI(queryURL);  
  }

 
 
//document.getElementById("latitude").value =
 // position.coords.latitude.toFixed(2);
//document.getElementById("longitude").value =
//  position.coords.longitude.toFixed(2);


var timer = document.getElementById("timeTracker");
$("#currentDay").html(timer);

function displayTime () {
  var now = dayjs().format('MMMM, D, YYYY HH:mm:ss');
  timer.textContent = now;
}
displayTime ();
setInterval(displayTime, 1000);