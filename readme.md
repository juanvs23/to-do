Listar todo version 1.0

Este es un sistema en consola para nodejs el cual te permite crear actividades, actualizarlas, listarlas y borrarlas usuando la terminal


Comandos:
  index.js crear       Crear una nueva actividad
        --descripcion, -d  Descripcion de una actividad                    [requerido]
  index.js listar      Muestra todas las actividades y su estatus
        no tiene
  index.js borrar      Borra una actividad
        --descripcion, -d  Descripcion de una actividad                    [requerido]
  index.js actualizar  actualiza las actividades
      --descripcion, -d  Descripcion de una actividad                    [requerido]
  --completado, -c   estado de una actividad, "pendiente" o "completado"
                                                         [defecto: "completado"]

Opciones:
  --version  Muestra número de versión                                [booleano]
  --help     Muestra ayuda  


version 1.00

atualmente los datos se guardan en un archivo json

version 2
   utilizar base de datos

version 3
    utilizar ui en navegador