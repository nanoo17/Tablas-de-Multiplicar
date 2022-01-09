const colors = require('colors');
const fs = require('fs');
const { Module } = require('module');
const crearArchivo = (num,listar=false,limite) =>{
    let salida, guardar = '';

    for(let i=1; i<=limite ; i++){
    salida += `${num} ${'x'.blue} ${i} ${'='.yellow} ${num*i} \n`;
    guardar += `${num} x ${i} = ${num*i} \n`;
    }

    if(listar){
    console.log(salida);
    console.log(colors.magenta(`el limite es: ${limite}`));}

    fs.writeFileSync(`./salida/tabla-${num}.txt`, guardar); 

    //console.log(salida);
}

const getResultados= async(num,listar=false,limite) =>{

    try {
        const resultado = await crearArchivo(num,listar,limite);
        return `tabla-${num}.txt`;
    } catch (error) {
       throw error;
    }
}


module.exports = {
    crearArchivo
}
module.exports = {
    getResultados
}