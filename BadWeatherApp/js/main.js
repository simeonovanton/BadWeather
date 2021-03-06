const mainController = (function () {

    const onButtonClick = function (cityId) {
        const baseUrl = apiConfig.baseUrl;
        const key = apiConfig.key;
        const id = cityId;
        const url = baseUrl + id + key;
        $.get(url, onDataRetrieved);      
    };

    const onDataRetrieved = function (json) {
        let cityName = $('#city-name');
        cityName.html(json.city.name);
        let countryName = $('#country-name');
        countryName.html(json.city.country);

        variablesConfig.currentCityID = (json.city.id).toString();
        sessionStorage.setItem('data', JSON.stringify(json));
        
        CreateContent.CurrentTab();
        FillContent.CurrentTab(json);
        imageController.SetBackground(json);
    };
    
    const onDropdownClick = function () {
        let cityId = $(this).attr('id');

        if (variablesConfig.currentCityID !== cityId) {
            clearContent.clear();
            switchActive.ToToday();
            onButtonClick(cityId);
        }       
    };

    return {
        onButtonClick: onButtonClick,
        onDropdownClick: onDropdownClick
    };
})();
