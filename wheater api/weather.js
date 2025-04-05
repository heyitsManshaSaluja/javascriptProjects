const API_KEY = '429f6916da13fb84f6c91e284fc5d97e';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${API_KEY}&units=metric';

const submitbtn = document.getElementById('submit');
const weatherinfo = document.getElementById('weatherinfo');
const inputField = document.getElementById('inputField'); 
submitbtn.addEventListener('click', () => {
    fetchWeather();
});

function fetchWeather() {
    let city = inputField.value;
    if (!city) {
        alert('Please enter a city');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;
            const feels = data.main.feels_like;

            weatherinfo.innerHTML = `
                <div class="current-weather">
                    <h2>Weather in ${city}</h2>
                    <div class="temp">Temperature: ${temp}°C</div>
                    <div class="description">Condition: ${desc}</div>
                    <div class="details">
                        <div class="humidity">Humidity: ${humidity}%</div>
                        <div class="windspeed">Wind Speed: ${wind} m/s</div>
                        <div class="feels-like">Feels Like: ${feels}°C</div>
                    </div>
                </div>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}
