const apiKey = '614bea3f7468166d25f9277dc1148e7a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const cityInput = document.querySelector(".city-input"); //gets value typed into input box
const searchButton = document.querySelector(".input-container button");

const weatherIcon = document.querySelector(".weather-icon i");
const condition = document.querySelector(".condition");

const Currentdate = new Date();
const options = {weekday: 'short', day : 'numeric', month : 'short'}
const formattedDate = Currentdate.toLocaleDateString('en-US', options);

async function checkWeather(city) {

    // const response = await fetch(apiUrl  + '&appid=${apiKey}'); //fetched data using the api url
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);

    if (response.status == 404)
    {
        document.querySelector(".not-found").style.display = "block";
        document.querySelector(".weather-info").style.display = "none";  //changes display property to block and shows weather information
    }
    else
    {
        document.querySelector(".city-name").innerHTML = data.name; //querySelector selects the city-name element & innerHTML will update the text written in the city element to data.name
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C"; //round off temperature value
        document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed-value").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".current-date").textContent = formattedDate;

        if (data.weather[0].main == "Clouds")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-cloud')
            weatherIcon.className = 'fa-solid fa-cloud';
            condition.innerHTML = "Cloudy";
        }
        else if (data.weather[0].main == "Clear")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-sun')
            weatherIcon.className = 'fa-solid fa-sun';
            condition.innerHTML = "Clear";
        }
        else if (data.weather[0].main == "Rain")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-cloud-rain')
            weatherIcon.className = 'fa-solid fa-cloud-showers-heavy';
            condition.innerHTML = "Rain";
        }
        else if (data.weather[0].main == "Drizzle")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-cloud-rain')
            weatherIcon.className = 'fa-solid fa-cloud-rain';
            condition.innerHTML = "Drizzle";
        }
        else if (data.weather[0].main == "Mist")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-smog');
            weatherIcon.className = 'fa-solid fa-smog';
            condition.innerHTML = "Mist";
        }
        else if (data.weather[0].main == "Thunderstorm")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-cloud-bolt')
            weatherIcon.className = 'fa-solid fa-cloud-bolt';
            condition.innerHTML = "Thunderstorm";
        }
        else if (data.weather[0].main == "Snow")
        {
            // weatherIcon.classList.replace('fa-cloud-sun','fa-snowflake')
            weatherIcon.className = 'fa-solid fa-snowflake';
            condition.innerHTML = "Snow";
        }

        document.querySelector(".weather-info").style.display = "block";  //changes display property to block and shows weather information
        document.querySelector(".search-city").style.display = "none"; //changes display property to none and shows weather information
        document.querySelector(".not-found").style.display = "none"; //error not shown when user enters correct input
    }
    
}

//when searchButton is clicked, the information typed into searchBox is sent to checkWeather()
searchButton.addEventListener("click", () => {

    if (cityInput.value.trim() != '') //check that value entered in input box is not empty
    {
        checkWeather(cityInput.value); //sends city name typed into searchBox to checkWeather()
    }
})

cityInput.addEventListener('keydown', (event) => {

    if (event.key == 'Enter' && cityInput.value.trim() != '') //when the Enter key is pressed
    {
        checkWeather(cityInput.value);
    }
})