

'use strict';

//variables globales------------------------------------------
const btnEditarParametro= document.querySelector('#btnEditar');
const btnGuardarParametro= document.querySelector('#btnGuardar');

const inputPeriodo = document.querySelector('#Periodo');
const inputMaxHorasxCuatri = document.querySelector('#MaxHorasxCuatri');
const inputPorcentajeBecaxHoraTrabajada = document.querySelector('#PorcentajeBecaxHoraTrabajada');


//listeners---------------------------------------------------

btnEditarParametro.addEventListener('click',function(){

    btnEditarParametro.classList.add('modificar');
    btnGuardarParametro.classList.remove('modificar');
    // ftnHabilitarEdicion();
});

btnGuardarParametro.addEventListener('click',function(){


});

//loads------------------------------------------------------
window.onload = function(){

    let idParametro = obtenerIdParametro();
    let parametro = obtenerListaParametros();

    ftnMostrarProyecto(idParametro,parametro);
    ftnDeshabilitarCampos();
};

//funciones-------------------------------------------------
// PROBLEMAS ACA

function ftnMostrarProyecto (idProyecto,proyectos){

    let proyectoSeleccionado = null;
    let optionLider = selectProfesorLider.getElementsByTagName('option');
    let optionTecnico = selectProfesorTecnico.getElementsByTagName('option');
    let optionCliente = selectCliente.getElementsByTagName('option');
    let valorOption = null;

    proyectos.forEach(element => {
        if (element._id == idProyecto) {
            proyectoSeleccionado = element;
        }
    });

    inputCodigo.value = proyectoSeleccionado.codigo;
    inputFechaCreacion.value = ftnFomatoFecha(proyectoSeleccionado.fechaCreacion)[0];
    inputNombre.value = proyectoSeleccionado.nombre;
    inputDescripcion.value = proyectoSeleccionado.descripcion;
    inputEstado.value = proyectoSeleccionado.estado;
    inputFechaEntrega.value = ftnFomatoFecha(proyectoSeleccionado.fechaEntrega)[1];
    ftnAsignarOpcion(optionCliente,proyectoSeleccionado.clienteProyecto[0].idCliente);
    ftnAsignarOpcion(optionLider,proyectoSeleccionado.profesorLider[0].idLider);
    ftnAsignarOpcion(optionTecnico,proyectoSeleccionado.profesorTecnico[0].idTecnico);
   
};
// PROBLEMAS ACA
function ftnAsignarOpcion (pOpcion,pId){
    let valorOption = null;
    
    for (let i = 0; i < pOpcion.length; i++) {
        valorOption = pOpcion[i].value;

        if(valorOption == pId){
            pOpcion[i].setAttribute('selected',true);
        }
    }
};

function ftnDeshabilitarCampos (){

    inputPeriodo.setAttribute('disabled',true);
    inputMaxHorasxCuatri.setAttribute('disabled',true);
    inputPorcentajeBecaxHoraTrabajada.setAttribute('disabled',true);

};

function obtenerIdParametro() {
    let paginaUrl = window.location.href;
    let locacion = paginaUrl.lastIndexOf("?") + 3;
    let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
    return id;
 }; 






function obtenerDatosParametro(){
    let infoProyecto =[];
    let bError = false;

    let gPeriodo = inputPeriodo.value;
    let gMaxHorasxCuatri = inputMaxHorasxCuatri.value;
    let gPorcentajeBecaxHoraTrabajada = inputPorcentajeBecaxHoraTrabajada.value;


    infoProyecto.push(gPeriodo, gMaxHorasxCuatri, gPorcentajeBecaxHoraTrabajada);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el parámetro',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el parámetro');
    }else{
        registrarParametro(infoParametro);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El parámetro se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        
    }
    
};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    let regexLetrasNumeros = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ 0-9]+$/;

    //Validación nombre del Periodo del Parametro
    if(inputPeriodo.value == ''  ){
        inputNombre.classList.add('error-input');
        bError = true;
    }else{
        inputPeriodo.classList.remove('error-input');
    }


    //Validación de Maximas horas por Cuatri Permitidas.
    if(inputMaxHorasxCuatri.value == '' && (regexLetrasNumeros.test(inputMaxHorasxCuatri.value)==false)){
        inputMaxHorasxCuatri.classList.add('error-input');
        bError = true;
    }else{
        inputMaxHorasxCuatri.classList.remove('error-input');
    }

  
     //Validación del Porcentaje de beca por hora trabajada.
     if(inputPorcentajeBecaxHoraTrabajada.value == '' && (regexLetrasNumeros.test(inputPorcentajeBecaxHoraTrabajada.value)==false)){
        inputPorcentajeBecaxHoraTrabajada.classList.add('error-input');
        bError = true;
    }else{
        inputPorcentajeBecaxHoraTrabajada.classList.remove('error-input');
    }

  
    return bError;
};


