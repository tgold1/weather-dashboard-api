var APIKey = "1a6e242c584145cebf5c8827e5e6e268";
var latitude = "39.9551221447199";
var longitude = "-75.16952831929365";
var searchURL = "https://api.openweathermap.org/data/2.5/forecast?lat=39.9551221447199&lon=-75.16952831929365&appid=1a6e242c584145cebf5c8827e5e6e268&units=imperial";
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
  cityLocation.textContent= data.city.name;
  Temperature.textContent="Temperature: " + data.list[0].main.temp + " degrees";
  Windspeed.textContent="Windspeed: " + data.list[0].wind.speed + " mph";
  Humidity.textContent="Humidity: " + data.list[0].main.humidity + "%";
  var Boxone = document.querySelector("#boxone");
  Boxone.innerHTML="Temperature: " + data.list[1].main.temp + " degrees<br/>Windspeed: " + data.list[1].wind.speed + " mph<br/>Humidity: " + data.list[1].main.humidity + "%";
  var Boxtwo = document.querySelector("#boxtwo");
  Boxtwo.innerHTML="Temperature: " + data.list[2].main.temp + " degrees<br/>Windspeed: " + data.list[2].wind.speed + " mph<br/>Humidity: " + data.list[2].main.humidity + "%";
  var Boxthree = document.querySelector("#boxthree");
  Boxthree.innerHTML="Temperature: " + data.list[3].main.temp + " degrees<br/>Windspeed: " + data.list[3].wind.speed + " mph<br/>Humidity: " + data.list[3].main.humidity + "%";
  var Boxfour = document.querySelector("#boxfour");
  Boxfour.innerHTML="Temperature: " + data.list[4].main.temp + " degrees<br/>Windspeed: " + data.list[4].wind.speed + " mph<br/>Humidity: " + data.list[4].main.humidity + "%";
  var Boxfive = document.querySelector("#boxfive");
  Boxfive.innerHTML="Temperature: " + data.list[5].main.temp + " degrees<br/>Windspeed: " + data.list[5].wind.speed + " mph<br/>Humidity: " + data.list[5].main.humidity + "%";
}
function getAPI(queryURL) {
fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getWeather(data);
      localStorage.setItem("cityView", JSON.stringify(data));
     
    });
    Searchbutton.addEventListener('click' , function (event) {
      console.log(forecastView.value)
      getAPI(forecastView.value)
    
    })
   
    
    
     
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

getAPI(searchURL); 