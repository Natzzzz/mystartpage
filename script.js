window.onload = function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Sion,ch&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}

var callBackGetSuccess = function(data) {
    var element = document.getElementById("zone_meteo");
    element.innerHTML = data.main.temp + "°C";

    var element = document.getElementById("zone_description");
    element.innerHTML = data.weather[0].description;
//    element.innerHTML = "description: " + data.main.description;

    var element = document.getElementById("zone_lieu");
    element.innerHTML = "<i class='fas fa-map-marker-alt'></i>" + " " + data.name;

    var element = document.getElementById("zone_date");
    var today = new Date();
    element.innerHTML = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    var element = document.getElementById("zone_time")
    var d = new Date().toLocaleTimeString();
    element.innerHTML = d;

    var element = document.getElementById("zone_greeting");
    const morning = "good morning";
    const afternoon = "good afternoon";
    const evening = "good evening";
    var time = new Date();
    var hour = time.getHours();

    if (hour>=1 && hour<=11) {
      element.innerHTML = morning;
    } else if (hour>=12 && hour<=18) {
      element.innerHTML = afternoon;
    } else {
      element.innerHTML = evening
    }
}
