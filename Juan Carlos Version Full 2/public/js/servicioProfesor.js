'use strict';

function registrarProfesor(paInfoProfesor){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarProfesores',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            Nombre: paInfoProfesor[0],
            Apellido : paInfoProfesor[1],
            Cedula : paInfoProfesor[2],
            Telefono: paInfoProfesor[3],
            Correo: paInfoProfesor [4],

            Provincia : paInfoProfesor[5],
            Canton : paInfoProfesor[6],
            Distrito : paInfoProfesor[7],
            DireccionExacta : paInfoProfesor[8],
            
            GAcademico : paInfoProfesor[9],
            Aexperiencia : paInfoProfesor[10],
            CImpartidos : paInfoProfesor[11],

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}




function obtenerListaProfesores(){
    let listaProfesores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarProfesores',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{


            Nombre: paInfoProfesor[0],
            Apellido : paInfoProfesor[1],
            Telefono: paInfoProfesor[3],
            Provincia : paInfoProfesor[5],  
            GAcademico : paInfoProfesor[9],
         

            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaProfesores;
}
