$(document).ready(function(){
    var skycons = new Skycons({"color": "pink"});


    navigator.geolocation.getCurrentPosition(weather, error);

    function error(err){
        $('h2').innerHTML = `ERROR(${err.code}): ${err.message}`
    }

    function weather(position){
        var key = '9cc747ed3457f77c3b4daf1950e83e8e';
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long)

        var URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
        console.log(URL)
        $.getJSON(URL, function(data){
            console.log(data)
            var city = data.name
            var temp  = Math.floor(data.main.temp -272.15)
            var icon = data.weather[0].icon
            var desc = data.weather[0].description    
            console.log(city, temp, icon, desc)
            $('h2').text(city);
            $('h1').text(temp);
            $('h3').text(desc);
        })
    }

})