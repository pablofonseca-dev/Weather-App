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
    Descripción: ${weatherObject.data.name} 
    Temperatura: ${weatherObject.data.main.temp}C° 
    Se siente a una temperatura de: ${weatherObject.data.main.feels_like}C°
    Nivel de Presión: ${weatherObject.data.main.pressure} 
    Humedad: ${weatherObject.data.main.humidity}%
    Latitud: ${weatherObject.data.coord.lat}
    Longitud: ${weatherObject.data.coord.lon}
    Código de País: ${weatherObject.data.sys.country} 
    `.cyan; 

    console.log(details);

};


