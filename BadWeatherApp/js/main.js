function onDataRetrieved(json){
    var cityName = $("#city-name");
    cityName.html("London");
    var countryName = $("#country-name");
    countryName.html("England");
}

function onButtonClick() {
    $.get("http://cors-anywhere.herokuapp.com/samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", onDataRetrieved);
}

$("#london-city").on("click", onButtonClick);

