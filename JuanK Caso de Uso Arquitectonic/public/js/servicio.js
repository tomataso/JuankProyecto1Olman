'use strict';


function GuardarProfesor(paInfoProfesor) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarProfesor',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            NombreProfesor: paInfoProfesor[0],
            ApellidoProfesor: paInfoProfesor[1],
            CedulaProfesor: paInfoProfesor[2],
            TelefonoProfesor: paInfoProfesor[3],
            GradoAcademicoProfesor: paInfoProfesor[4],
            CorreoElectronicoProfesor: paInfoProfesor[5],
            ProvinciaProfesor: paInfoProfesor[6],
            CantonProfesor: paInfoProfesor[7],
            DistritoProfesor: paInfoProfesor[8],
            DireccionExactaProfesor: paInfoProfesor[9],
            AnnosExperienciaProfesor: paInfoProfesor[10],
            CursosImpartidosProfesor: paInfoProfesor[11]
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}
