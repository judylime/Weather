"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=95051&APPID=0f523137bfc121df4c34e6ee36c635b5"

$.ajax({
    url:url,
    success:function (result) {
        console.log(result);
        console.log(result.name);

        // Output the location
        $("#location").text(result.name);
        // let displayCity = 'Current weather in ${result.name}';
        // $("#location").html(displayCity);
       

        // Display the Temperature
        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let Fahrenheit = F.toString();
        $("#temperature").text(Fahrenheit);
        // let displayTemp =`Temperature: ${F} &#176;F`;
        // $("#temperature").html(displayTemp);


         // Display the Wind
        let windSpeed = Math.round (result.wind.speed /.44704);
        let wind = windSpeed.toString ();
        $("#wind").text(wind);
        // let displayWind = `Wind : $ {windSpeed} mph` ;
        // $("#wind").html(displayWind);
        
         // Display the sky condition
          $("#sky").text(result.weather[0].description);
           //  let displaySky = `Sky condition: ${result.weather[0].description}`;
        //  $("#sky").html(displaySky);
        //  $("#sky").text(sky);
         
        
    }
});





















