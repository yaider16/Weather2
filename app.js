'use strict';

let weather = {
	"apiKey": "a8aae5986479300eb04c0f2abfe450f7",
	fetchweather: function(city){
	fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid="+this.apiKey)
	.then((response) => response.json())
	.then((data) => this.DisplayWheather(data))},

	DisplayWheather: function(data){
		const {name}= data;
		const {icon, description} = data.weather[0];
		const {temp, humidity} = data.main;
		const {speed} = data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		document.querySelector('.city').innerText = "Weather in " + name;
		document.querySelector('.temp').innerText = temp + "cº";
		document.querySelector('.description').innerText = "Is " + description;
		document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
		document.querySelector('.wind').innerText = "Wind Speed: " + speed + "Km/h";
		document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
	},
	search: function(){
		this.fetchweather(document.querySelector('.search-bar').value);
	}
};
// Cuando se vaya a presionar el boton se activara la funcion que hara que se busque el value que tiene el input
document.querySelector('.button').addEventListener("click", () =>{
	weather.search()
});