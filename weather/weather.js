const axios = require('axios').default;

const getWeather = async (lat, lon) => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apikey=cfaf63da393125a5908180252c18af58&units=metric`;
    
    let weatherData = await axios.get(URL);

    return weatherData;

}

module.exports = {
    getWeather
};