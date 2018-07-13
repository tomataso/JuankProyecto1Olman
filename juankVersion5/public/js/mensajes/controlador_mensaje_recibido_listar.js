'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaMensajesRecibidos = document.querySelector('#tblMensajesRecibidos');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarMensajesRecibidos()});

//loads------------------------------------------------------
window.onload = function(){
    ListarMensajesRecibidos();
};


//funciones--------------------------------------------------
function ListarMensajesRecibidos(){
    let listaMensajesRecibidos = obtenerListaMensajesRecibidos();

    let tbody = document.querySelector('#tblMensajesRecibidos tbody');
    tbody.innerHTML = '';
tblMensajesEnviados
    for(let i = 0; i < listaMensajesRecibidos.length; i++){
        
        
            let fila = tbody.insertRow();
            let celdaFecha = fila.insertCell();
            let celdaUsuarioEmisor = fila.insertCell();
            let celdaAsunto = fila.insertCell();
            

            let btns = fila.insertCell();

// VER ESTO
            let btnVer = document.createElement('input');
            btnVer.type = 'button';
            btnVer.value = 'Ver';
            btnVer.name = listaMensajesRecibidos[i]['_id'];
            btnVer.classList.add('btn-list');



            celdaFecha.innerHTML = listaMensajesRecibidos[i]['Fecha'];
            celdaUsuarioEmisor.innerHTML = listaMensajesRecibidos[i]['UsuarioReceptor'];
            celdaAsunto.innerHTML = listaMensajesRecibidos[i]['Asunto'];
 

     
      
            btns.appendChild(btnVer);
           
        
    }

};




function  ftnftnFiltrarMensajesRecibidos (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasMensajesRecibidos = tablaMensajesRecibidos.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasMensajesRecibidos.length; i++) {    
        datosFila = filasMensajesRecibidos[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};
