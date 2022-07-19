const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

const  { base, listar, hasta } = argv;

crearArchivo( base, listar, hasta )
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err) );


// **Forma tradicional** //
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 'base=5' ] = arg3.split('=');