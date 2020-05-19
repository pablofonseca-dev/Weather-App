const yargs_argv = require('yargs')
    .options({
        pais: {
            alias: 'P', 
            desc: 'País al que pertenece la ciudad.', 
            demand: false
        }, 
        ciudad: {
            alias: 'C', 
            desc: "Ciudad a la que se le consultará el clima.",
            demand: true
        }
    }).argv; 

module.exports = {
    yargs_argv
}
