
geocode("Houston, TX", myMapBoxKey).then(function(results){
    reverseGeocode({lat: results[1], lng: results[0]},myMapBoxKey).then(function (currentLocation){
        $("#currentLocation").html(currentLocation)
    })

    mapboxgl.accessToken = myMapBoxKey;
    const map = new mapboxgl.Map({
        container: 'mapBox',
        style: 'mapbox://styles/minhnguyen8989/clf2z972u004701pbfxi4p5p3',
        center: [results[0], results[1]],//Set lng.lat Checked
        zoom: 9,
    });

    //url syntax example: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    const myWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${myWeatherMapKey}&units=imperial`;
    console.log(myWeatherAPI);

    // Weather APIs and Push to HTML
    $.get(myWeatherAPI).done(function (jsondata){
        const date1 = new Date(jsondata.list[0].dt * 1000).toLocaleDateString([],{
            weekday: 'long',
            month: 'short',
            day: '2-digit'
        })
        let addHTML1 = '';
        addHTML1 += "<h4>" + date1 + "</h4>"
        addHTML1 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[0].weather[0].icon +".png\" alt=\"\"/>"
        addHTML1 += "<h5>Min-Temp: " + parseInt(jsondata.list[0].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[0].main.temp_max) + "&deg;F</h5>"
        addHTML1 += "<h6>Description: " + jsondata.list[0].weather[0].description.toUpperCase() + "</h6>"
        addHTML1 += "<h6>Humidity: " + jsondata.list[0].main.humidity + "</h6>"
        addHTML1 += "<h6>Wind Speed: " + jsondata.list[0].wind.speed + " Knots</h6>"
        addHTML1 += "<h6>Pressure: " + jsondata.list[0].main.pressure + "</h6>"
        $("#weatherBody1").html(addHTML1)

        const date2 = new Date(jsondata.list[7].dt * 1000).toLocaleDateString([],{
            weekday: 'long',
            month: 'short',
            day: '2-digit'
        })
        let addHTML2 = '';
        addHTML2 += "<h4>" + date2 + "</h4>"
        addHTML2 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[7].weather[0].icon +".png\" alt=\"\"/>"
        addHTML2 += "<h5>Min-Temp: " + parseInt(jsondata.list[7].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[7].main.temp_max) + "&deg;F</h5>"
        addHTML2 += "<h6>Description: " + jsondata.list[7].weather[0].description.toUpperCase() + "</h6>"
        addHTML2 += "<h6>Humidity: " + jsondata.list[7].main.humidity + "</h6>"
        addHTML2 += "<h6>Wind Speed: " + jsondata.list[7].wind.speed + " Knots</h6>"
        addHTML2 += "<h6>Pressure: " + jsondata.list[7].main.pressure + "</h6>"
        $("#weatherBody2").html(addHTML2)

        const date3 = new Date(jsondata.list[15].dt * 1000).toLocaleDateString([],{
            weekday: 'long',
            month: 'short',
            day: '2-digit'
        })
        let addHTML3 = '';
        addHTML3 += "<h4>" + date3 + "</h4>"
        addHTML3 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[15].weather[0].icon +".png\" alt=\"\"/>"
        addHTML3 += "<h5>Min-Temp: " + parseInt(jsondata.list[15].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[15].main.temp_max) + "&deg;F</h5>"
        addHTML3 += "<h6>Description: " + jsondata.list[15].weather[0].description.toUpperCase() + "</h6>"
        addHTML3 += "<h6>Humidity: " + jsondata.list[15].main.humidity + "</h6>"
        addHTML3 += "<h6>Wind Speed: " + jsondata.list[15].wind.speed + " Knots</h6>"
        addHTML3 += "<h6>Pressure: " + jsondata.list[15].main.pressure + "</h6>"
        $("#weatherBody3").html(addHTML3)

        const date4 = new Date(jsondata.list[23].dt * 1000).toLocaleDateString([],{
            weekday: 'long',
            month: 'short',
            day: '2-digit'
        })
        let addHTML4 = '';
        addHTML4 += "<h4>" + date4 + "</h4>"
        addHTML4 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[23].weather[0].icon +".png\" alt=\"\"/>"
        addHTML4 += "<h5>Min-Temp: " + parseInt(jsondata.list[23].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[23].main.temp_max) + "&deg;F</h5>"
        addHTML4 += "<h6>Description: " + jsondata.list[23].weather[0].description.toUpperCase() + "</h6>"
        addHTML4 += "<h6>Humidity: " + jsondata.list[23].main.humidity + "</h6>"
        addHTML4 += "<h6>Wind Speed: " + jsondata.list[23].wind.speed + " Knots</h6>"
        addHTML4 += "<h6>Pressure: " + jsondata.list[23].main.pressure + "</h6>"
        $("#weatherBody4").html(addHTML4)

        const date5 = new Date(jsondata.list[31].dt * 1000).toLocaleDateString([],{
            weekday: 'long',
            month: 'short',
            day: '2-digit'
        })
        let addHTML5 = '';
        addHTML5 += "<h4>" + date5 + "</h4>"
        addHTML5 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[31].weather[0].icon +".png\" alt=\"\"/>"
        addHTML5 += "<h5>Min-Temp: " + parseInt(jsondata.list[31].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[31].main.temp_max) + "&deg;F</h5>"
        addHTML5 += "<h6>Description: " + jsondata.list[31].weather[0].description.toUpperCase() + "</h6>"
        addHTML5 += "<h6>Humidity: " + jsondata.list[31].main.humidity + "</h6>"
        addHTML5 += "<h6>Wind Speed: " + jsondata.list[31].wind.speed + " Knots</h6>"
        addHTML5 += "<h6>Pressure: " + jsondata.list[31].main.pressure + "</h6>"
        $("#weatherBody5").html(addHTML5)

    })
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([results[0], results[1]])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();

        reverseGeocode({lat: lngLat.lat, lng: lngLat.lng},myMapBoxKey).then(function (currentLocation){
            $("#currentLocation").html(currentLocation)
        })

        //url syntax example: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
        const myWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${myWeatherMapKey}&units=imperial`;
        console.log(myWeatherAPI);

        //Weather APIs and Push to HTML
        $.get(myWeatherAPI).done(function (jsondata){
            const date1 = new Date(jsondata.list[0].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML1 = '';
            addHTML1 += "<h4>" + date1 + "</h4>"
            addHTML1 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[0].weather[0].icon +".png\" alt=\"\"/>"
            addHTML1 += "<h5>Min-Temp: " + parseInt(jsondata.list[0].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[0].main.temp_max) + "&deg;F</h5>"
            addHTML1 += "<h6>Description: " + jsondata.list[0].weather[0].description.toUpperCase() + "</h6>"
            addHTML1 += "<h6>Humidity: " + jsondata.list[0].main.humidity + "</h6>"
            addHTML1 += "<h6>Wind Speed: " + jsondata.list[0].wind.speed + " Knots</h6>"
            addHTML1 += "<h6>Pressure: " + jsondata.list[0].main.pressure + "</h6>"
            $("#weatherBody1").html(addHTML1)

            const date2 = new Date(jsondata.list[7].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML2 = '';
            addHTML2 += "<h4>" + date2 + "</h4>"
            addHTML2 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[7].weather[0].icon +".png\" alt=\"\"/>"
            addHTML2 += "<h5>Min-Temp: " + parseInt(jsondata.list[7].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[7].main.temp_max) + "&deg;F</h5>"
            addHTML2 += "<h6>Description: " + jsondata.list[7].weather[0].description.toUpperCase() + "</h6>"
            addHTML2 += "<h6>Humidity: " + jsondata.list[7].main.humidity + "</h6>"
            addHTML2 += "<h6>Wind Speed: " + jsondata.list[7].wind.speed + " Knots</h6>"
            addHTML2 += "<h6>Pressure: " + jsondata.list[7].main.pressure + "</h6>"
            $("#weatherBody2").html(addHTML2)

            const date3 = new Date(jsondata.list[15].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML3 = '';
            addHTML3 += "<h4>" + date3 + "</h4>"
            addHTML3 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[15].weather[0].icon +".png\" alt=\"\"/>"
            addHTML3 += "<h5>Min-Temp: " + parseInt(jsondata.list[15].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[15].main.temp_max) + "&deg;F</h5>"
            addHTML3 += "<h6>Description: " + jsondata.list[15].weather[0].description.toUpperCase() + "</h6>"
            addHTML3 += "<h6>Humidity: " + jsondata.list[15].main.humidity + "</h6>"
            addHTML3 += "<h6>Wind Speed: " + jsondata.list[15].wind.speed + " Knots</h6>"
            addHTML3 += "<h6>Pressure: " + jsondata.list[15].main.pressure + "</h6>"
            $("#weatherBody3").html(addHTML3)

            const date4 = new Date(jsondata.list[23].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML4 = '';
            addHTML4 += "<h4>" + date4 + "</h4>"
            addHTML4 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[23].weather[0].icon +".png\" alt=\"\"/>"
            addHTML4 += "<h5>Min-Temp: " + parseInt(jsondata.list[23].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[23].main.temp_max) + "&deg;F</h5>"
            addHTML4 += "<h6>Description: " + jsondata.list[23].weather[0].description.toUpperCase() + "</h6>"
            addHTML4 += "<h6>Humidity: " + jsondata.list[23].main.humidity + "</h6>"
            addHTML4 += "<h6>Wind Speed: " + jsondata.list[23].wind.speed + " Knots</h6>"
            addHTML4 += "<h6>Pressure: " + jsondata.list[23].main.pressure + "</h6>"
            $("#weatherBody4").html(addHTML4)

            const date5 = new Date(jsondata.list[31].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML5 = '';
            addHTML5 += "<h4>" + date5 + "</h4>"
            addHTML5 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[31].weather[0].icon +".png\" alt=\"\"/>"
            addHTML5 += "<h5>Min-Temp: " + parseInt(jsondata.list[31].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[31].main.temp_max) + "&deg;F</h5>"
            addHTML5 += "<h6>Description: " + jsondata.list[31].weather[0].description.toUpperCase() + "</h6>"
            addHTML5 += "<h6>Humidity: " + jsondata.list[31].main.humidity + "</h6>"
            addHTML5 += "<h6>Wind Speed: " + jsondata.list[31].wind.speed + " Knots</h6>"
            addHTML5 += "<h6>Pressure: " + jsondata.list[31].main.pressure + "</h6>"
            $("#weatherBody5").html(addHTML5)

        })
    }
    marker.on('dragend', onDragEnd);
})
var defaultLocation = 'Houston, TX';
function searchLocation(){
    let location = $("#searchBox").val();
    geocode(location, myMapBoxKey).then(function(results){
        reverseGeocode({lat: results[1], lng: results[0]},myMapBoxKey).then(function (currentLocation){
            $("#currentLocation").html(currentLocation)
        })


        mapboxgl.accessToken = myMapBoxKey;
        const map = new mapboxgl.Map({
            container: 'mapBox',
            style: 'mapbox://styles/minhnguyen8989/clf2z972u004701pbfxi4p5p3',
            center: [results[0], results[1]],//Set lng.lat Checked
            zoom: 9,
        });


        const marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([results[0], results[1]])
            .addTo(map);

        function onDragEnd() {
            const lngLat = marker.getLngLat();

            reverseGeocode({lat: lngLat.lat, lng: lngLat.lng},myMapBoxKey).then(function (currentLocation){
                $("#currentLocation").html(currentLocation)
            })

            //url syntax example: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
            const myWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${myWeatherMapKey}&units=imperial`;
            console.log(myWeatherAPI);

            //Weather APIs and Push to HTML
            $.get(myWeatherAPI).done(function (jsondata){
                const date1 = new Date(jsondata.list[0].dt * 1000).toLocaleDateString([],{
                    weekday: 'long',
                    month: 'short',
                    day: '2-digit'
                })
                let addHTML1 = '';
                addHTML1 += "<h4>" + date1 + "</h4>"
                addHTML1 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[0].weather[0].icon +".png\" alt=\"\"/>"
                addHTML1 += "<h5>Min-Temp: " + parseInt(jsondata.list[0].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[0].main.temp_max) + "&deg;F</h5>"
                addHTML1 += "<h6>Description: " + jsondata.list[0].weather[0].description.toUpperCase() + "</h6>"
                addHTML1 += "<h6>Humidity: " + jsondata.list[0].main.humidity + "</h6>"
                addHTML1 += "<h6>Wind Speed: " + jsondata.list[0].wind.speed + " Knots</h6>"
                addHTML1 += "<h6>Pressure: " + jsondata.list[0].main.pressure + "</h6>"
                $("#weatherBody1").html(addHTML1)

                const date2 = new Date(jsondata.list[7].dt * 1000).toLocaleDateString([],{
                    weekday: 'long',
                    month: 'short',
                    day: '2-digit'
                })
                let addHTML2 = '';
                addHTML2 += "<h4>" + date2 + "</h4>"
                addHTML2 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[7].weather[0].icon +".png\" alt=\"\"/>"
                addHTML2 += "<h5>Min-Temp: " + parseInt(jsondata.list[7].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[7].main.temp_max) + "&deg;F</h5>"
                addHTML2 += "<h6>Description: " + jsondata.list[7].weather[0].description.toUpperCase() + "</h6>"
                addHTML2 += "<h6>Humidity: " + jsondata.list[7].main.humidity + "</h6>"
                addHTML2 += "<h6>Wind Speed: " + jsondata.list[7].wind.speed + " Knots</h6>"
                addHTML2 += "<h6>Pressure: " + jsondata.list[7].main.pressure + "</h6>"
                $("#weatherBody2").html(addHTML2)

                const date3 = new Date(jsondata.list[15].dt * 1000).toLocaleDateString([],{
                    weekday: 'long',
                    month: 'short',
                    day: '2-digit'
                })
                let addHTML3 = '';
                addHTML3 += "<h4>" + date3 + "</h4>"
                addHTML3 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[15].weather[0].icon +".png\" alt=\"\"/>"
                addHTML3 += "<h5>Min-Temp: " + parseInt(jsondata.list[15].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[15].main.temp_max) + "&deg;F</h5>"
                addHTML3 += "<h6>Description: " + jsondata.list[15].weather[0].description.toUpperCase() + "</h6>"
                addHTML3 += "<h6>Humidity: " + jsondata.list[15].main.humidity + "</h6>"
                addHTML3 += "<h6>Wind Speed: " + jsondata.list[15].wind.speed + " Knots</h6>"
                addHTML3 += "<h6>Pressure: " + jsondata.list[15].main.pressure + "</h6>"
                $("#weatherBody3").html(addHTML3)

                const date4 = new Date(jsondata.list[23].dt * 1000).toLocaleDateString([],{
                    weekday: 'long',
                    month: 'short',
                    day: '2-digit'
                })
                let addHTML4 = '';
                addHTML4 += "<h4>" + date4 + "</h4>"
                addHTML4 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[23].weather[0].icon +".png\" alt=\"\"/>"
                addHTML4 += "<h5>Min-Temp: " + parseInt(jsondata.list[23].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[23].main.temp_max) + "&deg;F</h5>"
                addHTML4 += "<h6>Description: " + jsondata.list[23].weather[0].description.toUpperCase() + "</h6>"
                addHTML4 += "<h6>Humidity: " + jsondata.list[23].main.humidity + "</h6>"
                addHTML4 += "<h6>Wind Speed: " + jsondata.list[23].wind.speed + " Knots</h6>"
                addHTML4 += "<h6>Pressure: " + jsondata.list[23].main.pressure + "</h6>"
                $("#weatherBody4").html(addHTML4)

                const date5 = new Date(jsondata.list[31].dt * 1000).toLocaleDateString([],{
                    weekday: 'long',
                    month: 'short',
                    day: '2-digit'
                })
                let addHTML5 = '';
                addHTML5 += "<h4>" + date5 + "</h4>"
                addHTML5 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[31].weather[0].icon +".png\" alt=\"\"/>"
                addHTML5 += "<h5>Min-Temp: " + parseInt(jsondata.list[31].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[31].main.temp_max) + "&deg;F</h5>"
                addHTML5 += "<h6>Description: " + jsondata.list[31].weather[0].description.toUpperCase() + "</h6>"
                addHTML5 += "<h6>Humidity: " + jsondata.list[31].main.humidity + "</h6>"
                addHTML5 += "<h6>Wind Speed: " + jsondata.list[31].wind.speed + " Knots</h6>"
                addHTML5 += "<h6>Pressure: " + jsondata.list[31].main.pressure + "</h6>"
                $("#weatherBody5").html(addHTML5)

            })
        }
        marker.on('dragend', onDragEnd);

        const myWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results
            [0]}&appid=${myWeatherMapKey}&units=imperial`;
        console.log(myWeatherAPI);

        //Weather APIs and Push to HTML
        $.get(myWeatherAPI).done(function (jsondata){
            const date1 = new Date(jsondata.list[0].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML1 = '';
            addHTML1 += "<h4>" + date1 + "</h4>"
            addHTML1 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[0].weather[0].icon +".png\" alt=\"\"/>"
            addHTML1 += "<h5>Min-Temp: " + parseInt(jsondata.list[0].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[0].main.temp_max) + "&deg;F</h5>"
            addHTML1 += "<h6>Description: " + jsondata.list[0].weather[0].description.toUpperCase() + "</h6>"
            addHTML1 += "<h6>Humidity: " + jsondata.list[0].main.humidity + "</h6>"
            addHTML1 += "<h6>Wind Speed: " + jsondata.list[0].wind.speed + " Knots</h6>"
            addHTML1 += "<h6>Pressure: " + jsondata.list[0].main.pressure + "</h6>"
            $("#weatherBody1").html(addHTML1)

            const date2 = new Date(jsondata.list[7].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML2 = '';
            addHTML2 += "<h4>" + date2 + "</h4>"
            addHTML2 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[7].weather[0].icon +".png\" alt=\"\"/>"
            addHTML2 += "<h5>Min-Temp: " + parseInt(jsondata.list[7].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[7].main.temp_max) + "&deg;F</h5>"
            addHTML2 += "<h6>Description: " + jsondata.list[7].weather[0].description.toUpperCase() + "</h6>"
            addHTML2 += "<h6>Humidity: " + jsondata.list[7].main.humidity + "</h6>"
            addHTML2 += "<h6>Wind Speed: " + jsondata.list[7].wind.speed + " Knots</h6>"
            addHTML2 += "<h6>Pressure: " + jsondata.list[7].main.pressure + "</h6>"
            $("#weatherBody2").html(addHTML2)

            const date3 = new Date(jsondata.list[15].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML3 = '';
            addHTML3 += "<h4>" + date3 + "</h4>"
            addHTML3 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[15].weather[0].icon +".png\" alt=\"\"/>"
            addHTML3 += "<h5>Min-Temp: " + parseInt(jsondata.list[15].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[15].main.temp_max) + "&deg;F</h5>"
            addHTML3 += "<h6>Description: " + jsondata.list[15].weather[0].description.toUpperCase() + "</h6>"
            addHTML3 += "<h6>Humidity: " + jsondata.list[15].main.humidity + "</h6>"
            addHTML3 += "<h6>Wind Speed: " + jsondata.list[15].wind.speed + " Knots</h6>"
            addHTML3 += "<h6>Pressure: " + jsondata.list[15].main.pressure + "</h6>"
            $("#weatherBody3").html(addHTML3)

            const date4 = new Date(jsondata.list[23].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML4 = '';
            addHTML4 += "<h4>" + date4 + "</h4>"
            addHTML4 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[23].weather[0].icon +".png\" alt=\"\"/>"
            addHTML4 += "<h5>Min-Temp: " + parseInt(jsondata.list[23].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[23].main.temp_max) + "&deg;F</h5>"
            addHTML4 += "<h6>Description: " + jsondata.list[23].weather[0].description.toUpperCase() + "</h6>"
            addHTML4 += "<h6>Humidity: " + jsondata.list[23].main.humidity + "</h6>"
            addHTML4 += "<h6>Wind Speed: " + jsondata.list[23].wind.speed + " Knots</h6>"
            addHTML4 += "<h6>Pressure: " + jsondata.list[23].main.pressure + "</h6>"
            $("#weatherBody4").html(addHTML4)

            const date5 = new Date(jsondata.list[31].dt * 1000).toLocaleDateString([],{
                weekday: 'long',
                month: 'short',
                day: '2-digit'
            })
            let addHTML5 = '';
            addHTML5 += "<h4>" + date5 + "</h4>"
            addHTML5 += "<img src=\"http://openweathermap.org/img/w/"+ jsondata.list[31].weather[0].icon +".png\" alt=\"\"/>"
            addHTML5 += "<h5>Min-Temp: " + parseInt(jsondata.list[31].main.temp_min) + "&deg;F /  Max-Temp: " + parseInt(jsondata.list[31].main.temp_max) + "&deg;F</h5>"
            addHTML5 += "<h6>Description: " + jsondata.list[31].weather[0].description.toUpperCase() + "</h6>"
            addHTML5 += "<h6>Humidity: " + jsondata.list[31].main.humidity + "</h6>"
            addHTML5 += "<h6>Wind Speed: " + jsondata.list[31].wind.speed + " Knots</h6>"
            addHTML5 += "<h6>Pressure: " + jsondata.list[31].main.pressure + "</h6>"
            $("#weatherBody5").html(addHTML5)

        })

    })
}
var SearchButton = document.getElementById("searchButton");
SearchButton.addEventListener("click", searchLocation);

