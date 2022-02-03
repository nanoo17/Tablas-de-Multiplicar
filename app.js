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
//npm init inicia el json pero tenes que indicarle las cosas para hacer
//npm uninstall 
//npm install paquete --save-dev  se crea una dependencia de desarrollo
//npm update
//npm install paquete@version (1.0.0) etc..
//npm install tambien sirve para instalar los modulos de node de 0
//npm init -y inicia el package.json en blanco


//configuracion de yargs independiente



//git init = inicia el proyecto en git
//git add . =prepara los archivos locales
//git commit -m "mensaje" commitea los archivos
//git checkout -- . = checkea si los archivos están igual que el ultimo commit