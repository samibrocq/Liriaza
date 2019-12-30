$(function () {
  $('[data-toggle="popover"]').popover()
})



var page = document.querySelector("html");
var buttonnext = document.querySelector(".fa-chevron-circle-right");
var buttonback = document.querySelector(".fa-chevron-circle-left");
page.onkeypress = nextpage;
function nextpage(e){
    if (event.keyCode==13){
        buttonnext.click()
    }
   if (event.keyCode == 8){
        buttonback.click()
    }
};

/*
DATOS CONSTANTES

*/


var general = {
  rendimientoCosecha: 200,
  rendimientoTrituradora: 100,
  ritmoTrituracion: 60,
  espacioTrituracion: 5,
  precioMolino: 100000
}

//Lombricomposta

var lombricomposta = {
  densidadLirio: 300,
  densidadCompost: 600,
  masaFinalPreCompost: (50)/100,
  masaFinalCompost: (29*1)/100,
  rellenarPreComposteros: 30,
  voltearPreComposteros: 30,
  rellenarLomvricomposteros: 30,
  ponerSecar: 30,
  tamizar: 1,
  precioCajaPrecomposteo: 400,
  precioLombricompostero: 200,
  precioTamiz: 200
}

var secado = {
  masaFinalInicial: (10)/100,
  densidadPromedioLirio: 5,
  tiempoDeSecado: 5,
  llenarSecador: 200,
  sacarLaMateriaSeca: 20,
  precioInvernaderoCharola: 400,
  precioMolinoFino : 5000
}

var biogas = {
  capacidadRHALE: 6,
  capacidadUASB: 5,
  rendimientoUASB: 1,
  capacidadCalorificaBiogas: 6,
  extaccionJugo: 0.3,
  alimentarUASB: 5,
  alimentarRHALE: 5,
  precioExtractorJugo: 10000,
  precioRactorRHALE: 2000,
  precioReactorUASB: 4000,
  percioCarpaParedes: 3000,
  precioBolsaAlmacenamiento: 3000
}

var composta = {
  densidadCompostHum: 600,
  densidadLirioPicado: 300,
  masaFinalInicial: (15)/100,
  alimentarComposteros: 30,
  voltear: 30,
  ponerSecar: 30,
  tamizar: 0.5,
  precioCajaTarimas: 400
}








