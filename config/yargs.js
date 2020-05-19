const yargs_argv = require('yargs')
    .options({
        direccion: {
            alias: 'D', 
            desc: 'Dirección de la que se obtendrá el clima', 
            demand: true
        }, 
    }).argv; 

module.exports = {
    yargs_argv
}
