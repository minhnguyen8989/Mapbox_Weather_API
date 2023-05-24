const my_mapbox_key = 'sk.eyJ1IjoibWluaG5ndXllbjg5ODkiLCJhIjoiY2xpMTF6ZHl6MGV3eDNrcGNqbWRqdzdqMSJ9.ercAu1fID-2J1LVolPlVSQ';
const my_weather_key = '9025a2d6622b68c5fc89a00b436f5355';

// Auto run newLocation function when first Load
document.addEventListener('DOMContentLoaded', function (){
    newLocation();
})

function newLocation() {

    let location = $("#searchBox").val();

    geocode(location, my_mapbox_key).then(function (results) {
        reverseGeocode({lat: results[1], lng: results[0]}, my_mapbox_key).then(function (currentLocation) {
            $("#currentLocation").html(currentLocation)
        })

        // Mapbox API
        mapboxgl.accessToken = my_mapbox_key;
        var map = new mapboxgl.Map({
            container: 'mapBox',
            style: 'mapbox://styles/minhnguyen8989/clg0etder00a401pbxv46evlw',
            zoom: 9,
            center: [results[0], results[1]] // [lng, lat]
        });

        const marker = new mapboxgl.Marker({
            draggable: false
        })
            .setLngLat([results[0], results[1]])
            .addTo(map);

        map.flyTo({
            center: [results[0], results[1]], // New center coordinates
            zoom: 10, // Zoom level (adjust as needed)
            speed: 0.8, // Animation speed (adjust as needed)
            curve: 1, // Animation curve (adjust as needed)
            easing: function (t) {
                return t;
            }
        })


        // Weather API
        const myWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${my_weather_key}&units=imperial`;
        console.log(myWeatherAPI);


        // today date Info
        $.get(myWeatherAPI).done(function (timeStatus) {
            const date = new Date(timeStatus.list[0].dt * 1000).toLocaleString([], {
                weekday: 'long',
            })
            let pushDate = '';
            pushDate += "<h2><b>" + date + "</b></h2>"
            $("#todayDate").html(pushDate)
        })

        //City Info
        $.get(myWeatherAPI).done(function (cityStatus) {
            const city = cityStatus.city.name;
            let addCity = '';
            addCity += "<h5> <i class=\"fa-solid fa-location-dot fa-xl\"></i> " + city + "</h5>"
            $("#city").html(addCity)
        })

        //API Status
        $.get(myWeatherAPI).done(function (apiStatus) {
            const api = apiStatus.cod;
            if (api === "200") {
                let addAPIStatus = '';
                addAPIStatus += "<h5> Weather API status: <i class=\"fa-solid fa-circle-check fa-shake fa-xl\" style=\"color: #143d05;\"></i> </h5>"
                $("#status").html(addAPIStatus)
            } else {
                let addAPIStatus = '';
                addAPIStatus += "<h5> Weather API status: <i class=\"fa-solid fa-circle-x fa-shake fa-xl\" style=\"color: #ce1c1c;\"></i> </h5>"
                $("#status").html(addAPIStatus)
            }
        })

        //Temp Info
        $.get(myWeatherAPI).done(function (tempStatus) {
            const temp = tempStatus.list[0].main.temp;
            let addTemp = '';
            addTemp += "<h1 class='display-1 fw-bold'>" + parseInt(temp) + "&deg;F</h1>"
            $("#temp").html(addTemp)
        })

        //Full Date
        $.get(myWeatherAPI).done(function (fullDateStatus) {
            const fullDate = fullDateStatus.list[0].dt_txt;
            let addFullDate = '';
            addFullDate += "<p>" + fullDate + "</p>"
            $("#fullDate").html(addFullDate)
        })

        //Weather Status
        $.get(myWeatherAPI).done(function (weatherStatus) {
            const weather = weatherStatus.list[0].weather[0].main;
            const subWeather = weatherStatus.list[0].weather[0].description;
            let addWeather = '';
            addWeather += "<p>" + weather + " - " + subWeather + "</p>"
            addWeather += "<img src=\"http://openweathermap.org/img/w/" + weatherStatus.list[0].weather[0].icon + ".png\" alt=\"\"/>"
            $("#weather").html(addWeather)
        })


        // Day 2 Date & Weather
        $.get(myWeatherAPI).done(function (timeStatus) {
            const date = new Date(timeStatus.list[7].dt * 1000).toLocaleString([], {
                weekday: 'long',
            })
            let pushDate2 = '';
            pushDate2 += "<p><b>" + date + "</b></p>"
            $("#day2Date").html(pushDate2)
        })

        $.get(myWeatherAPI).done(function (weatherStatus) {
            const weather = weatherStatus.list[7].weather[0].main;
            const subWeather = weatherStatus.list[7].weather[0].description;
            const temp = weatherStatus.list[7].main.temp;
            let addWeather2 = '';
            addWeather2 += "<p>" + parseInt(temp) + "&deg;F</p>"
            addWeather2 += "<p>" + weather + " - " + subWeather + "</p>"
            addWeather2 += "<img src=\"http://openweathermap.org/img/w/" + weatherStatus.list[7].weather[0].icon + ".png\" alt=\"\"/>"
            $("#day2Weather").html(addWeather2)
        })

        // Day 3 Date & Weather
        $.get(myWeatherAPI).done(function (timeStatus) {
            const date = new Date(timeStatus.list[15].dt * 1000).toLocaleString([], {
                weekday: 'long',
            })
            let pushDate3 = '';
            pushDate3 += "<p><b>" + date + "</b></p>"
            $("#day3Date").html(pushDate3)
        })

        $.get(myWeatherAPI).done(function (weatherStatus) {
            const weather = weatherStatus.list[15].weather[0].main;
            const subWeather = weatherStatus.list[15].weather[0].description;
            const temp = weatherStatus.list[15].main.temp;
            let addWeather3 = '';
            addWeather3 += "<p>" + parseInt(temp) + "&deg;F</p>"
            addWeather3 += "<p>" + weather + " - " + subWeather + "</p>"
            addWeather3 += "<img src=\"http://openweathermap.org/img/w/" + weatherStatus.list[15].weather[0].icon + ".png\" alt=\"\"/>"
            $("#day3Weather").html(addWeather3)
        })

        // Day 4 Date & Weather
        $.get(myWeatherAPI).done(function (timeStatus) {
            const date = new Date(timeStatus.list[23].dt * 1000).toLocaleString([], {
                weekday: 'long',
            })
            let pushDate4 = '';
            pushDate4 += "<p><b>" + date + "</b></p>"
            $("#day4Date").html(pushDate4)
        })

        $.get(myWeatherAPI).done(function (weatherStatus) {
            const weather = weatherStatus.list[23].weather[0].main;
            const subWeather = weatherStatus.list[23].weather[0].description;
            const temp = weatherStatus.list[23].main.temp;
            let addWeather4 = '';
            addWeather4 += "<p>" + parseInt(temp) + "&deg;F</p>"
            addWeather4 += "<p>" + weather + " - " + subWeather + "</p>"
            addWeather4 += "<img src=\"http://openweathermap.org/img/w/" + weatherStatus.list[23].weather[0].icon + ".png\" alt=\"\"/>"
            $("#day4Weather").html(addWeather4)
        })

        // Day 5 Date & Weather
        $.get(myWeatherAPI).done(function (timeStatus) {
            const date = new Date(timeStatus.list[31].dt * 1000).toLocaleString([], {
                weekday: 'long',
            })
            let pushDate5 = '';
            pushDate5 += "<p><b>" + date + "</b></p>"
            $("#day5Date").html(pushDate5)
        })

        $.get(myWeatherAPI).done(function (weatherStatus) {
            const weather = weatherStatus.list[31].weather[0].main;
            const subWeather = weatherStatus.list[31].weather[0].description;
            const temp = weatherStatus.list[31].main.temp;
            let addWeather5 = '';
            addWeather5 += "<p>" + parseInt(temp) + "&deg;F</p>"
            addWeather5 += "<p>" + weather + " - " + subWeather + "</p>"
            addWeather5 += "<img src=\"http://openweathermap.org/img/w/" + weatherStatus.list[31].weather[0].icon + ".png\" alt=\"\"/>"
            $("#day5Weather").html(addWeather5)
        })

        // Add Fact info
        $.get(myWeatherAPI).done(function (factInfo){
            const population = factInfo.city.population;
            const city = factInfo.city.name;
            let addFact = '';
            addFact += "<p><strong>" + city +"</strong> has a population of approximately <strong>" + population.toLocaleString() + "</strong> people.</p>"
            $("#description").html(addFact)
        })
    })
}

// Search Button
let SearchButton = document.getElementById("searchButton");
SearchButton.addEventListener("click", newLocation);

