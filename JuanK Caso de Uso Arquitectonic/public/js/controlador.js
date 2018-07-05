'use strict';

//Programar .
// imprimirListaProfesor();

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);


let inputNombreProfesor = document.querySelector('#txtNombreProfesor');
let inputApellidoProfesor = document.querySelector('#txtApellidoProfesor');
let inputCedulaProfesor = document.querySelector('#txtCedulaProfesor');
let inputTelefonoProfesor = document.querySelector('#txtTelefonoProfesor');
let inputGradoAcademicoProfesor = document.querySelector('#txtGradoAcademico');
let inputCorreoElectronicoProfesor = document.querySelector('#txtCorreoProfesor');

let inputProvinciaProfesor = document.querySelector('#txtProvinciaProfesor');
let inputCantonProfesor = document.querySelector('#txtCantonProfesor');
let inputDistritoProfesor = document.querySelector('#txtDistritoProfesor');
let inputDireccionExactaProfesor = document.querySelector('#txtDireccionExactaProfesor');
let inputAnnosExperienciaProfesor = document.querySelector('#txtAnnosExperienciaProfesor');
let inputCursosImpartidos = document.querySelector('#txtCursosImpartidos');




function obtenerDatos() {
    let infoProfesor = [];
    let bError = false;

    let sNombreProfesor = inputNombreProfesor.value;
    let sApellidoProfesor = inputApellidoProfesor.value;
    let sCedulaProfesor = inputCedulaProfesor.value;
    let sTelefonoProfesor = inputTelefonoProfesor.value;
    let sGradoAcademicoProfesor = inputGradoAcademicoProfesor.value;
    let sCorreoElectronicoProfesor = inputCorreoElectronicoProfesor.value;

    let sProvinciaProfesor = inputProvinciaProfesor.value;
    let sCantonProfesor = inputCantonProfesor.value;
    let sDistritoProfesor = inputDistritoProfesor.value;
    let sDireccionExactaProfesor = inputDireccionExactaProfesor.value;
    let sAnnosExperienciaProfesor = inputAnnosExperienciaProfesor.value;
    let sCursosImpartidos = inputCursosImpartidos.value;

    infoProfesor.push(sNombreProfesor, sApellidoProfesor, sCedulaProfesor, sTelefonoProfesor, sGradoAcademicoProfesor, sCorreoElectronicoProfesor, sProvinciaProfesor, sCantonProfesor, sDistritoProfesor, sDireccionExactaProfesor, sAnnosExperienciaProfesor, sCursosImpartidos);

    bError = validar();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el usuario profesor.',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el usuario profesor');
    } else {
        registrarCliente(infoProfesor);
        swal({
            type: 'success',
            title: 'Registro del profesor exitoso',
            text: 'El profesor usuario se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });
        limpiarFormularioProfesor();
    }

};

function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del NombreProfesor
    if (inputNombreProfesor.value == '' || (regexSoloLetras.test(inputNombreProfesor.value) == false)) {
        inputNombreProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputNombreProfesor.classList.remove('error_input');
    }


    //Validación del ApellidoProfesor
    if (inputApellidoProfesor.value == '' || (regexSoloLetras.test(inputApellidoProfesor.value) == false)) {
        inputApellidoProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputApellidoProfesor.classList.remove('error_input');
    }

    //Validación de la CedulaProfesor
    if (inputCedulaProfesor.value == '' ) {
        inputCedulaProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputCedulaProfesor.classList.remove('error_input');
    }

    //Validación de la TelefonoProfesor
    if (inputTelefonoProfesor.value == '' ) {
        inputTelefonoProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputTelefonoProfesor.classList.remove('error_input');
    }


    //Validación del  GradoAcademicoProfesor
    if (inputGradoAcademicoProfesor.value == '') {
        inputGradoAcademicoProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputGradoAcademicoProfesor.classList.remove('error_input');
    }



    //Validación de la CorreoProfesor
    if (inputCorreoElectronicoProfesor.value == '') {
        inputCorreoElectronicoProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputCorreoElectronicoProfesor.classList.remove('error_input');
    }


    //Validación del ProvinciaProfesor
    if (inputProvinciaProfesor.value == '' || (regexSoloLetras.test(inputProvinciaProfesor.value) == false)) {
        inputProvinciaProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputNombreProfesor.classList.remove('error_input');
    }


    //Validación del  CantonProfesor
    if (inputCantonProfesor.value == '') {
        inputCantonProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputCantonProfesor.classList.remove('error_input');
    }


    //Validación del  CantonProfesor
    if (inputCantonProfesor.value == '') {
        inputCantonProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputCantonProfesor.classList.remove('error_input');
    }


    //Validación del  DistritoProfesor
    if (inputDistritoProfesor.value == '') {
        inputDistritoProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputDistritoProfesor.classList.remove('error_input');
    }

    //Validación del  DireccionExactaProfesor
    if (inputDireccionExactaProfesor.value == '') {
        inputDireccionExactaProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputDireccionExactaProfesor.classList.remove('error_input');
    }

    //Validación de la AnnosExperienciaProfesor
    if (inputAnnosExperienciaProfesor.value == '' || (regexSoloNumeros.test(inputAnnosExperienciaProfesor.value) == false)) {
        inputAnnosExperienciaProfesor.classList.add('error_input');
        bError = true;
    } else {
        inputAnnosExperienciaProfesor.classList.remove('error_input');
    }

    //Validación del  CursosImpartidos
    if (inputCursosImpartidos.value == '') {
        inputCursosImpartidos.classList.add('error_input');
        bError = true;
    } else {
        inputCursosImpartidos.classList.remove('error_input');
    }



    return bError;
};

function limpiarFormularioProfesor() {


    inputNombreProfesor.value = '';
    inputApellidoProfesor.value = '';
    inputCedulaProfesor.value = '';
    inputTelefonoProfesor.value = '';
    inputGradoAcademicoProfesor.value = '';
    inputCorreoElectronicoProfesor.value = '';

    inputProvinciaProfesor.value = '';
    inputCantonProfesor.value = '';
    inputDistritoProfesor.value = '';
    inputDireccionExactaProfesor.value = '';
    inputAnnosExperienciaProfesor.value = '';
    inputCursosImpartidos.value = '';



}