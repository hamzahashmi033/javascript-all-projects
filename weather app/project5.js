let weather = {
  apiKey: "074981dcf1fa584ac0507ba7263b6033",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No weather found.");
        }
        return response.json();  
      })
      .then((data) => this.displayWeather(data));
    
    },
    
    displayWeather: function (data) {
      const { name } = data;
      const {icon , description} = data.weather[0];
      const {temp , humidity} = data.main;
      const {speed} = data.wind;
      console.log(data);

      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " +humidity +"%";
      document.querySelector(".wind").innerText = "Wind speed: "+ speed + "km/h";
      
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"; 

    },
     search: function(){
       let cityname = document.querySelector(".search-bar").value;
       this.fetchWeather(cityname);
    },
  };
 document.querySelector(".search button").addEventListener("click", function (){
   weather.search();
});
  document.querySelector(".search-bar").addEventListener('keyup', function(event){
    if(event.key == "Enter"){
      weather.search();
    }
  });
  weather.fetchWeather("karachi");