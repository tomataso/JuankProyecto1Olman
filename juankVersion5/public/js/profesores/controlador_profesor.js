'use strict';


let botonRegistrar = document.querySelector('#btnRegistrarProfesor');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre = document.querySelector('#txtNombreProfesor');
let inputApellido = document.querySelector('#txtApellidoProfesor');
let inputCedula = document.querySelector('#txtCedulaProfesor');
let inputTelefono = document.querySelector('#txtTelefonoProfesor');
let inputCorreo = document.querySelector('#txtCorreoProfesor');

let inputProvincia = document.querySelector('#txtProvinciaProfesor');
let inputCanton = document.querySelector('#txtCantonProfesor');
let inputDistrito = document.querySelector('#txtDistritoProfesor');
let inputDireccionExacta = document.querySelector('#txtDireccionExactaProfesor');

let inputGAcademico = document.querySelector('#txtGAcademico');
let inputAexperiencia = document.querySelector('#txtAexperiencia');
let inputCImpartidos = document.querySelector('#txtCImpartidos');


//Como obtener los datos de un selection #txtTipoProfesor
let inputTipoProfesor =  document.querySelector('#txtCImpartidos');



function obtenerDatos() {

    let infoProfesor = [];
    let bError = false;

    let sNombre = inputNombre.value;
    let sApellido = inputApellido.value;
    let sCedula = inputCedula.value;
    let sTelefono = inputTelefono.value;
    let sCorreo = inputCorreo.value;

    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sDireccionExacta = inputDireccionExacta.value;

    let sGAcademico = inputGAcademico.value;
    let sAexperiencia = Number(inputAexperiencia.value);
    let sCImpartidos = inputCImpartidos.value;
    let sTipoProfesor = inputTipoProfesor.value;
    let sDesactivado = false;


    infoProfesor.push(sNombre, sApellido, sCedula, sTelefono, sCorreo, sProvincia, sCanton, sDistrito, sDireccionExacta, sGAcademico, sAexperiencia, sCImpartidos, sTipoProfesor , sDesactivado);

    bError = validar();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el profesor',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el profesor');
    } else {
        registrarProfesor(infoProfesor);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            /*text: 'El Profesor usuario se registró adecuadamente',*/
            confirmButtonText: 'Entendido'
        });
        limpiarFormulario();
    }

}

function imprimirListaProfesores() {
    let listaProfesores = obtenerListaProfesores();
    let tbody = document.querySelector('#tblProfesor tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cCorreo = fila.insertCell();
        let cGAcademico = fila.insertCell();

        cNombre.innerHTML = listaProfesores[i]['Nombre'];
        cApellido.innerHTML = listaProfesores[i]['Apellido'];
        cTelefono.innerHTML = listaProfesores[i]['Telefono'];
        cCorreo.innerHTML = listaProfesores[i]['Correo'];
        cGAcademico.innerHTML = listaProfesores[i]['GAcademico'];

    }

};


function validar() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Nombre Profesor
    if (inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value) == false)) {
        inputNombre.classList.add('error_input');
        bError = true;
    } else {
        inputNombre.classList.remove('error_input');
    }

    //Validación del Apellido Profesor
    if (inputApellido.value == '' || (regexSoloLetras.test(inputApellido.value) == false)) {
        inputApellido.classList.add('error_input');
        bError = true;
    } else {
        inputApellido.classList.remove('error_input');
    }

    //Validación de la Cedula Profesor
    if (inputCedula.value == '') {
        inputCedula.classList.add('error_input');
        bError = true;
    } else {
        inputCedula.classList.remove('error_input');
    }

    //Validación de la Telefono Profesor
    if (inputTelefono.value == '') {
        inputTelefono.classList.add('error_input');
        bError = true;
    } else {
        inputTelefono.classList.remove('error_input');
    }

    //Validación de la Correo Profesor
    if (inputCorreo.value == '') {
        inputCorreo.classList.add('error_input');
        bError = true;
    } else {
        inputCorreo.classList.remove('error_input');
    }



    //Validación de la Provincia
    if (inputProvincia.value == '') {
        inputProvincia.classList.add('error_input');
        bError = true;
    } else {
        inputProvincia.classList.remove('error_input');
    }



    //Validación de la Canton
    if (inputCanton.value == '') {
        inputCanton.classList.add('error_input');
        bError = true;
    } else {
        inputCanton.classList.remove('error_input');
    }

    //Validación de la Distrito
    if (inputDistrito.value == '') {
        inputDistrito.classList.add('error_input');
        bError = true;
    } else {
        inputDistrito.classList.remove('error_input');
    }

    //Validación de la Direccion Exacta
    if (inputDireccionExacta.value == '') {
        inputDireccionExacta.classList.add('error_input');
        bError = true;
    } else {
        inputDireccionExacta.classList.remove('error_input');
    }




    //Validación del Grado Academico
    if (inputGAcademico.value == '') {
        inputGAcademico.classList.add('error_input');
        bError = true;
    } else {
        inputGAcademico.classList.remove('error_input');
    }

    //Validación del Años de Experiencia
    // Ponerle Validacion de Numeros || (regexSoloNumeros.test(inputTelefono.value) == false)
    if (inputAexperiencia.value == '') {
        inputAexperiencia.classList.add('error_input');
        bError = true;
    } else {
        inputAexperiencia.classList.remove('error_input');
    }

    //Validación de Cursos Impartidos
    if (inputCImpartidos.value == '') {
        inputCImpartidos.classList.add('error_input');
        bError = true;
    } else {
        inputCImpartidos.classList.remove('error_input');
    }

    return bError;
}



function limpiarFormulario() {

    inputNombre.value = '';
    inputApellido.value = '';
    inputCedula.value = '';
    inputTelefono.value = '';
    inputCorreo.value = '';


    inputProvincia.value = '';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputDireccionExacta.value = '';

    inputGAcademico.value = '';
    inputAexperiencia.value = '';
    inputCImpartidos.value = '';
}








