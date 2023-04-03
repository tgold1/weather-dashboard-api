var APIKey = "1a6e242c584145cebf5c8827e5e6e268";
var searchCity = localStorage.getItem("city");
var searchButton = document.querySelector("#user-form");
var forecastView = document.querySelector("#forecast");
function getWeather(data) {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&appid=1a6e242c584145cebf5c8827e5e6e268&units=imperial";
fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityLocation = document.querySelector("#cityLocation");
var Temperature = document.querySelector("#Temperature");
var Windspeed = document.querySelector("#Windspeed");
var Humidity = document.querySelector("#Humidity") ; 
  cityLocation.innerHTML= data.city.name + " (" + dayjs().format('M/D/YY') + ") <img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png'/>";
  Temperature.innerHTML="Temp: " + data.list[0].main.temp + "°F";
  Windspeed.innerHTML="Wind: " + data.list[0].wind.speed + " mph";
  Humidity.innerHTML="Humidity: " + data.list[0].main.humidity + "%";
  var Boxone = document.querySelector("#boxone");
  Boxone.innerHTML=dayjs().add(1, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[8].main.temp + "°F<br/>Wind: " + data.list[8].wind.speed + " mph<br/>Humidity: " + data.list[8].main.humidity + "%";
  var Boxtwo = document.querySelector("#boxtwo");
  Boxtwo.innerHTML=dayjs().add(2, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[16].main.temp + "°F<br/>Wind: " + data.list[16].wind.speed + " mph<br/>Humidity: " + data.list[16].main.humidity + "%";
  var Boxthree = document.querySelector("#boxthree");
  Boxthree.innerHTML=dayjs().add(3, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[24].main.temp + "°F<br/>Wind: " + data.list[24].wind.speed + " mph<br/>Humidity: " + data.list[24].main.humidity + "%";
  var Boxfour = document.querySelector("#boxfour");
  Boxfour.innerHTML=dayjs().add(4, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[32].main.temp + "°F<br/>Wind: " + data.list[32].wind.speed + " mph<br/>Humidity: " + data.list[32].main.humidity + "%";
  var Boxfive = document.querySelector("#boxfive");
  Boxfive.innerHTML=dayjs().add(5, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[39].main.temp + "°F<br/>Wind: " + data.list[39].wind.speed + " mph<br/>Humidity: " + data.list[39].main.humidity + "%";

      localStorage.setItem("cityView", JSON.stringify(data));
     
    });
  }
function getAPI(city) {
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getWeather(data);
      localStorage.setItem("city", city);
     
    });
    
   
    
    
     
  }

  searchButton.addEventListener('submit' , function (event) {
    event.preventDefault()
    console.log(forecastView.value)
    getAPI(forecastView.value)
  
  })
 
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

getAPI(searchCity); 