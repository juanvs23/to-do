const fs=require('fs'),
    colors =require('colors');
let actividades=[]


const leerDB=()=>{
     actividades=require('../db/database.json')
     return actividades
}

const activeDb=()=>{
    let data= JSON.stringify(actividades)
    fs.writeFile('db/database.json',data,(err)=>{
        if(err)  throw new Error('No se pudo grabar', err);
        listarActividades()
        
    })
}
const listarActividades=()=>{
    let data = leerDB()
    data.forEach((date,i)=>{
        if (date.estado=="pendiente") {
            console.log(colors.red('===Actividad Pendiente==='))
            console.log(`${i+1}: Actividad: "${date.descripcion}" Estado: ${date.estado}`)
            console.log(colors.red('========================='))
            console.log(' ')

        } else {
            console.log(colors.green('===Actividad Completada==='))
            console.log(`${i+1}: Actividad: "${date.descripcion}" Estado: ${date.estado}`)
            console.log(colors.green('========================='))
            console.log(' ')
        }
    })
}
const crearActividad=(desc)=>{
    
    leerDB()
    let result= actividades.findIndex(date=>desc==date.descripcion)
    if (result>=0) {
        console.log(colors.red('La actividad ya existe'))
    } else {
        
        let actividad={descripcion:desc,
            estado:'pendiente'};
            actividades.push(actividad)
            console.log(colors.green('actividad creada'))
            activeDb()
    } 
    
}
const actualizActividad=(actividad,estado)=>{
    console.log(actividad,estado)
     leerDB()
    let result= actividades.findIndex(date=>actividad==date.descripcion)
    console.log(result)
    if (result>=0) {
        actividades[result].estado=estado
        activeDb()
        console.log(colors.green('Actividad Actualizada'))
    } else {
        console.log( colors.red('Actividad no encontrada') )
    }
}
const borrarActi=(actividad)=>{
    leerDB()
    let nuevaLista=actividades.filter(date=>actividad!==date.descripcion);
    if (nuevaLista.length===actividades.length) {
        console.log( colors.red('No se borro ninguna actividad') )
        return false
    } else {
        actividades=nuevaLista
        console.log(colors.green('Actividad borrada'))
        activeDb()
        return true
    }
}


exports.module={
    crearActividad,
    listarActividades,
    actualizActividad,
    borrarActi
}