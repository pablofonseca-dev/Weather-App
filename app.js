const {
    yargs_argv
} = require('./config/yargs');

const {
    getLocationLatLon
} = require('./location/location');

const {
    getWeather
} = require('./weather/weather'); 

const colors = require('colors');

getLocationLatLon(yargs_argv.direccion)
    .then((result) => {

        if(result.addressLat == -9999.000000 || result.addressLon == -9999.000000){
            throw new Error("Debe especificar al menos la ciudad y el país.".red);
        }
        return getWeather(result.addressLat, result.addressLon)
    })
    .then(function(weather) {
        printWeatherData(weather);
    })
    .catch(err => {
        console.log(err);
    })

printWeatherData = (weatherObject) => {
    let details = `
    Descripción de la zona consultada: ${weatherObject.data.name} 
    Temperatura de la localización: ${weatherObject.data.main.temp}C° 
    Se siente a una temperatura de: ${weatherObject.data.main.feels_like}C°
    La presión de la zona es de: ${weatherObject.data.main.pressure} 
    La humedad se encuentra a: ${weatherObject.data.main.humidity}%
    La latitud de la zona es: ${weatherObject.data.coord.lat}
    La longitud de la zona es: ${weatherObject.data.coord.lon}
    El país es la zona es: ${weatherObject.data.sys.country} 
    `.cyan; 

    console.log(details);

};


