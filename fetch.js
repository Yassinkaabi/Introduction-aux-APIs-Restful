import fetch from "node-fetch";

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=fr&units=metric&q=`;

async function getWeatherData(city) {
    const url = BASE_URL + city;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

async function main() {
    try {
        const weatherData = await getWeatherData("Kairouan");
        console.log("Kairouan :");
        console.log("Description:", weatherData.weather[0].description);
        console.log("Temperature:", weatherData.main.temp + " °C");
        console.log("Humidity:", weatherData.main.humidity + "%");
    } catch (error) {
        console.error(error.message);
    }
}

main();
