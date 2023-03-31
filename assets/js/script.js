var APIKey = "4c60ce76d2f8439e8e23a1384d6f84f6";
var city;
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)