const colors = require('colors');
const yargs = require('yargs');
const {getResultados} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//console.log(process.argv);
//console.log(argv);

console.log('base yargs : '.red, colors.green(argv.base));

/*const [ , , arg3 = 'base=5'] = process.argv;

const [, base = 5] = arg3.split('=');
console.log(base);*/

//const num = 3;

getResultados(argv.b, argv.l,argv.h)
.then(nombreArchivo => console.log(colors.random(nombreArchivo + ' creada')))
.catch(err => console.log(colors.red(err)));


//todo desde consola
//npm init
//npm uninstall 
//npm install paquete --save-dev  se crea una dependencia de desarrollo
//npm update
//npm install paquete@version (1.0.0) etc..

//configuracion de yargs independiente