'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaMensajesRecibidos = document.querySelector('#tblMensajesEnviadoss');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarMensajesEnviados()});

//loads------------------------------------------------------
window.onload = function(){
    ListarMensajesEnviados();
};


//funciones--------------------------------------------------
function ListarMensajesEnviados(){
    let listaMensajesEnviados = obtenerListaMensajesEnviados();

    let tbody = document.querySelector('#tblMensajesEnviados tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaMensajesEnviados.length; i++){
        
        
            let fila = tbody.insertRow();
            let celdaFecha = fila.insertCell();
            let celdaUsuarioReceptor = fila.insertCell();
            let celdaAsunto = fila.insertCell();
            

            let btns = fila.insertCell();

            //VER ESTOOOOO
            let btnVer = document.createElement('input');
            btnVer.type = 'button';
            btnVer.value = 'Ver';
            btnVer.name = listaMensajesEnviados[i]['_id'];
            btnVer.classList.add('btn-list');



            celdaFecha.innerHTML = listaMensajesEnviados[i]['Fecha'];
            celdaUsuarioReceptor.innerHTML = listaMensajesEnviados[i]['UsuarioEmisor'];
            celdaAsunto.innerHTML = listaMensajesEnviados[i]['Asunto'];
 

     
      
            btns.appendChild(btnVer);
           
        
    }

};



function  ftnftnFiltrarMensajesEnviados (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasMensajesEnviados = tablaMensajesEnviados.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasMensajesEnviados.length; i++) {    
        datosFila = filasMensajesEnviados[i];
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
