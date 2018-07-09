'use strict';
imprimirListaProfesores();

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

let botonListarProfesores = document.querySelector('#btnbtnListarProfesor');
botonListarProfesores.addEventListener('click', imprimirListaProfesores);

let botonListarMensajesRecibidos = document.querySelector('#btnListarMensajesRecibidos');
botonListarMensajesRecibidos.addEventListener('click', imprimirListaMensajesRecibidos);

let botonListarMensajesEnviados = document.querySelector('#btnListarMensajesEnviados');
botonListarMensajesEnviados.addEventListener('click', imprimirListaMensajesEnviados);


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


    infoProfesor.push(sNombre, sApellido, sCedula, sTelefono, sCorreo, sProvincia, sCanton, sDistrito, sDireccionExacta, sGAcademico, sAexperiencia, sCImpartidos);

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


function imprimirListaMensajesRecibidos() {
    let listaMensajesRecibidos = obtenerListaMensajesRecibidos();
    let tbody = document.querySelector('#tblListarMensajesRecibidos tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let fila = tbody.insertRow();

        let cNombreUsuario = fila.insertCell();
        let cAsunto = fila.insertCell();
        let cFechaRecibido = fila.insertCell();
     
        cNombreUsuario.innerHTML = listaMensajesRecibidos[i]['NombreUsuario'];
        cAsunto .innerHTML = listaMensajesRecibidos[i]['Asunto'];
        cFechaRecibido .innerHTML = listaMensajesRecibidos[i]['FechaRecibido'];
    

    }

};


function imprimirListaMensajesEnviados() {
    let listaMensajesEnviados = obtenerListaMensajesEnviados();
    let tbody = document.querySelector('#tblListarMensajesEnviados tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let fila = tbody.insertRow();

        let cNombreUsuario = fila.insertCell();
        let cAsunto = fila.insertCell();
        let cFechaEnviado = fila.insertCell();
     
        cNombreUsuario.innerHTML = listaMensajesRecibidos[i]['NombreUsuario'];
        cAsunto.innerHTML = listaMensajesRecibidos[i]['Asunto'];
        cFechaEnviado.innerHTML = listaMensajesEnviados[i]['FechaEnvio'];
    

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



function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

