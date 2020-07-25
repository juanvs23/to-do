const argv =require('yargs').command('crear','Crear una nueva actividad',{
            descripcion:{
                demand:true,
                alias:'d',
                desc:'Descripcion de una actividad'
             },

            })
            .command('listar','Muestra todas las actividades y su estatus')
            .command('borrar','Borra una actividad',{
                descripcion:{
                    demand:true,
                    alias:'d',
                    desc:'Descripcion de una actividad'
                 }
            })
            .command('actualizar','actualiza las actividades',{
                descripcion:{
                    demand:true,
                    alias:'d',
                    desc:'Descripcion de una actividad'
                 },
                completado:{
                    default: 'completado',
                    alias:'c',
                    desc:'estado de una actividad, "pendiente" o "completado"'
                }
            }) 
            .help()
            .argv,
    actions=require('./actions/crear');
  const {crearActividad,listarActividades,actualizActividad,borrarActi}=actions.module

//console.log(crearActividad)
//console.log(argv)
let comando= argv._[0]

switch (comando) {
    case 'crear':
        
        crearActividad(argv.d)
       
        break;
    case 'listar':
        listarActividades()
         
        break; 
    case 'actualizar':
        actualizActividad(argv.d,argv.c)
         //console.log('actualizando')
        break; 
    case 'borrar': 
    borrarActi(argv.d)
            break;    

    default:
        console.log(`Comando "${comando}" desconocido`)
        break;
}
