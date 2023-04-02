var APIKey = "1a6e242c584145cebf5c8827e5e6e268";
var latitude = "39.9551221447199";
var longitude = "-75.16952831929365";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=39.9551221447199&lon=-75.16952831929365&appid=1a6e242c584145cebf5c8827e5e6e268";
 
function getWeather(data) {
var cityLoc =document.querySelector("#cityLoc");
var Temperature = document.querySelector("#Temperature");
var Windspeed = document.querySelector("#Windspeed");
var Humidity = document.querySelector("#Humidity") ; 
  console.log(data)
  cityLoc.textContent=data.city.Loc
  Temperature.textContent="Temperature:" + data.list[0].main.Temperature + "degrees"
  Windspeed.textContent="Windspeed:" + data.list[0].Wind.speed + "mph"
  Humidity.textContent="Humidity:" + data.list[0].main.Humidity + "%"
}
function getAPI(queryURL) {
fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    $("#Temperature").html(Temperature);
    $("#Windspeed").html(Windspeed);
    $("#Humidity").html(Humidity);

    
  }

  getAPI(queryURL); 
 
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