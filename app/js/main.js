//$(function () {
//  $('[data-toggle="popover"]').popover()
//})



var page = document.querySelector("html");
var buttonnext = document.getElementById('next')
var buttonback = document.querySelector(".fa-chevron-left");

function nextpage(e){
    if (event.keyCode==13){
        buttonnext.click()
    }
   if (event.keyCode == 8){
        buttonback.click()
    }
};

page.onkeypress = nextpage;

 function separ_milliers(nbr) {
            var nombre = '' + nbr;
            var retour = '';
            var count = 0;
            for (var i = nombre.length - 1; i >= 0; i--) {
                if (count != 0 && count % 3 == 0) retour = nombre[i] + ' ' + retour;
                else retour = nombre[i] + retour;
                count++;
            };
            return retour;
        }

 function createTotalRow(name,value,unit) {
     let divTables = document.querySelector('#tables')
     let table = document.createElement('table')
     let row = document.createElement('tr')
     row.setAttribute('class','generalTotal')
     divTables.append(table) ; table.append(row) ;
     
     let nameCell = document.createElement('td')
     nameCell.setAttribute('class','col-1')
   //  if (divTables.classList.contains('investTable')) {nameCell.setAttribute('colspan',2)}
     row.append(nameCell)
     nameCell.textContent = name
               
     let valueCell = document.createElement('td')
     valueCell.setAttribute('class','col-2')
     row.append(valueCell)
     valueCell.textContent = value
               
     let unitCell = document.createElement('td')
     unitCell.setAttribute('class','col-3')
     row.append(unitCell)
     unitCell.textContent = unit
}

/*
DATOS CONSTANTES
*/

miStorage = window.localStorage;


var general = {
  rendimientoCosecha: parseInt(localStorage.getItem('rendimientoCosecha')),
  rendimientoTrituradora: parseInt(localStorage.getItem('rendimientoTrituradora')),
  ritmoTrituracion: parseInt(localStorage.getItem('ritmoTrituracion')),
  espacioTrituracion: parseInt(localStorage.getItem('espacioTrituracion')),
  precioMolino: parseInt(localStorage.getItem('precioMolino'))
}

//Lombricomposta

var lombricomposta = {
  densidadLirio: parseInt(localStorage.getItem('densidadLirio')),
  densidadCompost: parseInt(localStorage.getItem('densidadCompost')),
  masaFinalPreCompost: parseFloat(localStorage.getItem('masaFinalPreCompost')),
  masaFinalCompost: parseFloat(localStorage.getItem('masaFinalCompost')),
  rellenarPreComposteros: parseInt(localStorage.getItem('rellenarPreComposteros')),
  voltearPreComposteros: parseInt(localStorage.getItem('voltearPreComposteros')),
  rellenarLomvricomposteros: parseInt(localStorage.getItem('rellenarLomvricomposteros')),
  ponerSecar: parseInt(localStorage.getItem('ponerSecar')),
  tamizar: parseInt(localStorage.getItem('tamizar')),
  precioCajaPrecomposteo: parseInt(localStorage.getItem('precioCajaPrecomposteo')),
  precioLombricompostero: parseInt(localStorage.getItem('precioLombricompostero')),
  precioTamiz: parseInt(localStorage.getItem('precioTamiz'))
}

var secado = {
  masaFinalInicial: parseFloat(localStorage.getItem('masaFinalInicial')),
  densidadPromedioLirio: parseInt(localStorage.getItem('densidadPromedioLirio')),
  tiempoDeSecado: parseInt(localStorage.getItem('tiempoDeSecado')),
  llenarSecador: parseInt(localStorage.getItem('llenarSecador')),
  sacarLaMateriaSeca: parseInt(localStorage.getItem('sacarLaMateriaSeca')),
  precioInvernaderoCharola: parseInt(localStorage.getItem('precioInvernaderoCharola')),
  precioMolinoFino : parseInt(localStorage.getItem('precioMolinoFino'))
}

var biogas = {
  capacidadRHALE: parseInt(localStorage.getItem('capacidadRHALE')),
  capacidadUASB: parseInt(localStorage.getItem('capacidadUASB')),
  rendimientoUASB: parseInt(localStorage.getItem('rendimientoUASB')),
  capacidadCalorificaBiogas: parseInt(localStorage.getItem('capacidadCalorificaBiogas')),
  extaccionJugo: parseFloat(localStorage.getItem('extaccionJugo')),
  alimentarUASB: parseInt(localStorage.getItem('alimentarUASB')),
  alimentarRHALE: parseInt(localStorage.getItem('alimentarRHALE')),
  precioExtractorJugo: parseFloat(localStorage.getItem('precioExtractorJugo')),
  precioRactorRHALE: parseInt(localStorage.getItem('precioRactorRHALE')),
  precioReactorUASB: parseInt(localStorage.getItem('precioReactorUASB')),
  percioCarpaParedes: parseInt(localStorage.getItem('percioCarpaParedes')),
  precioBolsaAlmacenamiento: parseInt(localStorage.getItem('precioBolsaAlmacenamiento'))
}

var composta = {
  densidadCompostHum: parseInt(localStorage.getItem('densidadCompostHum')),
  densidadLirioPicado: parseInt(localStorage.getItem('densidadLirioPicado')),
  masaFinalInicial: parseFloat(localStorage.getItem('masaFinalInicialUno')),
  alimentarComposteros: parseInt(localStorage.getItem('alimentarComposteros')),
  voltear: parseInt(localStorage.getItem('voltear')),
  ponerSecar: parseInt(localStorage.getItem('ponerSecarUno')),
  tamizar: parseFloat(localStorage.getItem('tamizarUno')),
  precioCajaTarimas: parseInt(localStorage.getItem('precioCajaTarimas'))
}








