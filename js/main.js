jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code

});

/*************************************
 * 
 * BOT
 * 
 ***********************************/


var boton = document.getElementById('boton');
var bandera = 0;

/******************
 * 
 * Variables de formulas
 * 
 ***************/
 var dato0;
 var dato1;
 var dato2;
 var dato3;
 var dato4;
 var dato5;
 var dato6;
 var dato7;
 var dato8;
 var dato9;
 var dato10;
 var dato11;
 var dato12;
 var dato13;
 var dato14;
 var dato15;
 var dato16;



 window.addEventListener("keydown", function (event) {console.log(event)
   if (event.keyCode==13) {
     bot();
     
   }
},false);








function bot() {

  var contenedorMensaje = document.getElementById('img-page');
  var textito = document.getElementById('Texto').value;
  
  if(bandera==0){
    dato0=textito;
  }
  if(bandera==1){
    dato1=textito;
  }
  if(bandera==2){
    dato2=textito;
  }
  if(bandera==3){
    dato3=textito;
  }


  var divChat = document.createElement('div');
  var divMsg = document.createElement('div');
  var parrafo = document.createElement('p');
  var span = document.createElement('span');


  divChat.setAttribute('class', 'outgoing-chats');
  divMsg.setAttribute('class', 'outgoing-chats-msg');
  span.setAttribute('class', 'time');


  var elMensaje = document.createTextNode(textito);

  parrafo.appendChild(elMensaje);

  divMsg.appendChild(parrafo);
  divChat.appendChild(divMsg);


  contenedorMensaje.appendChild(divChat);



  var texto = textito.toLowerCase();


  if (bandera == 0) {

    window.setTimeout(function () {

        
        var receivedChat = document.createElement('div');
        var chatImage = document.createElement('div');
        var img = document.createElement('img');


        var receivedMsg = document.createElement('div');
        var receivedBox = document.createElement('div');

        var parrafo = document.createElement('p');



        receivedChat.setAttribute('class', 'received-chats');
        chatImage.setAttribute('class', 'received-chats-img');
        img.setAttribute('class', 'img-fluid');
        img.setAttribute('src', '../IMAGES/PNH.png');
        receivedMsg.setAttribute('class', 'received-msg');
        receivedBox.setAttribute('class', 'received-msg-inbox');

        var textoBot = document.createTextNode("De los siguientes productos ¿Cual quieres hacer: Lombricomposta SI/NO");

        receivedBox.appendChild(textoBot);
        receivedMsg.appendChild(receivedBox);

        chatImage.appendChild(img);
        receivedChat.appendChild(chatImage);
        receivedChat.appendChild(receivedMsg);

        contenedorMensaje.appendChild(receivedChat);
        bandera++;
        event.preventDefault();

    }, 1500);
}else if (bandera == 1) {

  window.setTimeout(function () {

      
      var receivedChat = document.createElement('div');
      var chatImage = document.createElement('div');
      var img = document.createElement('img');


      var receivedMsg = document.createElement('div');
      var receivedBox = document.createElement('div');

      var parrafo = document.createElement('p');



      receivedChat.setAttribute('class', 'received-chats');
      chatImage.setAttribute('class', 'received-chats-img');
      img.setAttribute('class', 'img-fluid');
      img.setAttribute('src', '../IMAGES/PNH.png');
      receivedMsg.setAttribute('class', 'received-msg');
      receivedBox.setAttribute('class', 'received-msg-inbox');

      var textoBot = document.createTextNode("Composta: SI/NO");

      receivedBox.appendChild(textoBot);
      receivedMsg.appendChild(receivedBox);

      chatImage.appendChild(img);
      receivedChat.appendChild(chatImage);
      receivedChat.appendChild(receivedMsg);

      contenedorMensaje.appendChild(receivedChat);
      bandera++;
      event.preventDefault();

  }, 1500);
}else if (bandera == 2) {

  window.setTimeout(function () {

      
      var receivedChat = document.createElement('div');
      var chatImage = document.createElement('div');
      var img = document.createElement('img');


      var receivedMsg = document.createElement('div');
      var receivedBox = document.createElement('div');

      var parrafo = document.createElement('p');



      receivedChat.setAttribute('class', 'received-chats');
      chatImage.setAttribute('class', 'received-chats-img');
      img.setAttribute('class', 'img-fluid');
      img.setAttribute('src', '../IMAGES/PNH.png');
      receivedMsg.setAttribute('class', 'received-msg');
      receivedBox.setAttribute('class', 'received-msg-inbox');

      var textoBot = document.createTextNode("Biogas: SI/NO");

      receivedBox.appendChild(textoBot);
      receivedMsg.appendChild(receivedBox);

      chatImage.appendChild(img);
      receivedChat.appendChild(chatImage);
      receivedChat.appendChild(receivedMsg);

      contenedorMensaje.appendChild(receivedChat);
      bandera++;
      event.preventDefault();

  }, 1500);
}else if (bandera == 3) {

  window.setTimeout(function () {

      
      var receivedChat = document.createElement('div');
      var chatImage = document.createElement('div');
      var img = document.createElement('img');


      var receivedMsg = document.createElement('div');
      var receivedBox = document.createElement('div');

      var parrafo = document.createElement('p');



      receivedChat.setAttribute('class', 'received-chats');
      chatImage.setAttribute('class', 'received-chats-img');
      img.setAttribute('class', 'img-fluid');
      img.setAttribute('src', '../IMAGES/PNH.png');
      receivedMsg.setAttribute('class', 'received-msg');
      receivedBox.setAttribute('class', 'received-msg-inbox');

      var textoBot = document.createTextNode("Secado: SI/NO");

      receivedBox.appendChild(textoBot);
      receivedMsg.appendChild(receivedBox);

      chatImage.appendChild(img);
      receivedChat.appendChild(chatImage);
      receivedChat.appendChild(receivedMsg);

      contenedorMensaje.appendChild(receivedChat);
      bandera++;
      event.preventDefault();

  }, 1500);
}
else if (bandera == 4) {

  window.setTimeout(function () {

      
      var receivedChat = document.createElement('div');
      var chatImage = document.createElement('div');
      var img = document.createElement('img');


      var receivedMsg = document.createElement('div');
      var receivedBox = document.createElement('div');

      var parrafo = document.createElement('p');



      receivedChat.setAttribute('class', 'received-chats');
      chatImage.setAttribute('class', 'received-chats-img');
      img.setAttribute('class', 'img-fluid');
      img.setAttribute('src', '../IMAGES/PNH.png');
      receivedMsg.setAttribute('class', 'received-msg');
      receivedBox.setAttribute('class', 'received-msg-inbox');

      var textoBot = document.createTextNode("¿Que proporcion de la biomasa inicial del lirio, deseas dedicar a: ");

      if(dato2=='SI'){
        var textoBot2 = document.createTextNode("% Lombicomposta ");
      }

      receivedBox.appendChild(textoBot);
      receivedBox.appendChild(textoBot2);
      receivedMsg.appendChild(receivedBox);

      chatImage.appendChild(img);
      receivedChat.appendChild(chatImage);
      receivedChat.appendChild(receivedMsg);

      contenedorMensaje.appendChild(receivedChat);
      bandera++;
      event.preventDefault();

  }, 1500);
}else if (bandera == 5 && dato3=='SI') {

  window.setTimeout(function () {

      
      var receivedChat = document.createElement('div');
      var chatImage = document.createElement('div');
      var img = document.createElement('img');


      var receivedMsg = document.createElement('div');
      var receivedBox = document.createElement('div');

      var parrafo = document.createElement('p');



      receivedChat.setAttribute('class', 'received-chats');
      chatImage.setAttribute('class', 'received-chats-img');
      img.setAttribute('class', 'img-fluid');
      img.setAttribute('src', '../IMAGES/PNH.png');
      receivedMsg.setAttribute('class', 'received-msg');
      receivedBox.setAttribute('class', 'received-msg-inbox');

      var textoBot = document.createTextNode("% Composta");

      receivedBox.appendChild(textoBot);
      receivedMsg.appendChild(receivedBox);

      chatImage.appendChild(img);
      receivedChat.appendChild(chatImage);
      receivedChat.appendChild(receivedMsg);

      contenedorMensaje.appendChild(receivedChat);
      bandera++;
      event.preventDefault();

  }, 1500);
}





  // if (texto == 'prender bomba' || texto == 'encender' || texto == 'encender motor') {

  //     window.setTimeout(function () {

  //         db.ref('casa1').update({
  //             foco1: "onn"
  //         });
  //         var receivedChat = document.createElement('div');
  //         var chatImage = document.createElement('div');
  //         var img = document.createElement('img');


  //         var receivedMsg = document.createElement('div');
  //         var receivedBox = document.createElement('div');

  //         var parrafo = document.createElement('p');



  //         receivedChat.setAttribute('class', 'received-chats');
  //         chatImage.setAttribute('class', 'received-chats-img');
  //         img.setAttribute('class', 'img-fluid');
  //         img.setAttribute('src', '../IMAGES/PNH.png');
  //         receivedMsg.setAttribute('class', 'received-msg');
  //         receivedBox.setAttribute('class', 'received-msg-inbox');

  //         var textoBot = document.createTextNode("Prendiendo bomba");

  //         receivedBox.appendChild(textoBot);
  //         receivedMsg.appendChild(receivedBox);

  //         chatImage.appendChild(img);
  //         receivedChat.appendChild(chatImage);
  //         receivedChat.appendChild(receivedMsg);

  //         contenedorMensaje.appendChild(receivedChat);

  //         event.preventDefault();

  //     }, 1500);
  // }

  // if (texto == 'apagar bomba' || texto == 'apagar' || texto == 'apagar motor') {

  //     window.setTimeout(function () {

  //         db.ref('casa1').update({
  //             foco1: "off"
  //         });
  //         var receivedChat = document.createElement('div');
  //         var chatImage = document.createElement('div');
  //         var img = document.createElement('img');


  //         var receivedMsg = document.createElement('div');
  //         var receivedBox = document.createElement('div');

  //         var parrafo = document.createElement('p');



  //         receivedChat.setAttribute('class', 'received-chats');
  //         chatImage.setAttribute('class', 'received-chats-img');
  //         img.setAttribute('class', 'img-fluid');
  //         img.setAttribute('src', '../IMAGES/PNH.png');
  //         receivedMsg.setAttribute('class', 'received-msg');
  //         receivedBox.setAttribute('class', 'received-msg-inbox');

  //         var textoBot = document.createTextNode("Apagando bomba");

  //         receivedBox.appendChild(textoBot);
  //         receivedMsg.appendChild(receivedBox);

  //         chatImage.appendChild(img);
  //         receivedChat.appendChild(chatImage);
  //         receivedChat.appendChild(receivedMsg);

  //         contenedorMensaje.appendChild(receivedChat);

  //         event.preventDefault();

  //     }, 1500);


  // }


  // // Semillas


  // // Fertilizantes

  // if (texto == 'estoy buscando un fertilizante' || texto == 'busco un fertilizante') {
  //     window.setTimeout(function () {


  //         var receivedChat = document.createElement('div');
  //         var chatImage = document.createElement('div');
  //         var img = document.createElement('img');


  //         var receivedMsg = document.createElement('div');
  //         var receivedBox = document.createElement('div');

  //         var parrafo = document.createElement('p');



  //         receivedChat.setAttribute('class', 'received-chats');
  //         chatImage.setAttribute('class', 'received-chats-img');
  //         img.setAttribute('class', 'img-fluid');
  //         img.setAttribute('src', '../IMAGES/PNH.png');
  //         receivedMsg.setAttribute('class', 'received-msg');
  //         receivedBox.setAttribute('class', 'received-msg-inbox');

  //         var textoBot = document.createTextNode("¿Qué tipo de fertilizante? Orgánicos o Químicos?");

  //         receivedBox.appendChild(textoBot);
  //         receivedMsg.appendChild(receivedBox);

  //         chatImage.appendChild(img);
  //         receivedChat.appendChild(chatImage);
  //         receivedChat.appendChild(receivedMsg);

  //         contenedorMensaje.appendChild(receivedChat);

  //         event.preventDefault();

  //     }, 1500);
  // }

  // if (texto == 'quimico') {
  //     window.setTimeout(function () {


  //         var receivedChat = document.createElement('div');
  //         var chatImage = document.createElement('div');
  //         var img = document.createElement('img');


  //         var receivedMsg = document.createElement('div');
  //         var receivedBox = document.createElement('div');

  //         var parrafo = document.createElement('p');



  //         receivedChat.setAttribute('class', 'received-chats');
  //         chatImage.setAttribute('class', 'received-chats-img');
  //         img.setAttribute('class', 'img-fluid');
  //         img.setAttribute('src', '../IMAGES/PNH.png');
  //         receivedMsg.setAttribute('class', 'received-msg');
  //         receivedBox.setAttribute('class', 'received-msg-inbox');

  //         var textoBot = document.createTextNode("Urea recubierta de azufre (SCU) || Metil en Urea || Inhibidores de nitrificación");

  //         receivedBox.appendChild(textoBot);
  //         receivedMsg.appendChild(receivedBox);

  //         chatImage.appendChild(img);
  //         receivedChat.appendChild(chatImage);
  //         receivedChat.appendChild(receivedMsg);

  //         contenedorMensaje.appendChild(receivedChat);

  //         event.preventDefault();

  //     }, 1500);
  // }

  // if (texto == 'organico') {
  //     window.setTimeout(function () {


  //         var receivedChat = document.createElement('div');
  //         var chatImage = document.createElement('div');
  //         var img = document.createElement('img');


  //         var receivedMsg = document.createElement('div');
  //         var receivedBox = document.createElement('div');

  //         var parrafo = document.createElement('p');



  //         receivedChat.setAttribute('class', 'received-chats');
  //         chatImage.setAttribute('class', 'received-chats-img');
  //         img.setAttribute('class', 'img-fluid');
  //         img.setAttribute('src', '../IMAGES/PNH.png');
  //         receivedMsg.setAttribute('class', 'received-msg');
  //         receivedBox.setAttribute('class', 'received-msg-inbox');

  //         var textoBot = document.createTextNode("Abonos orgánicos que están hechos de productos naturales y por tanto son menos dañinos para el medio ambiente. Los más habituales son el estiércol, el compost o la turba. Se trata de productos que, aunque son más seguros para las plantas ofrecen un olor muy malo y, además pueden contener en su mezcla semillas de malas hierbas que aparecerán en primavera. También son más bajos en nutrientes y es necesaria más cantidad para el mismo efecto.– Estiércol: los hay de vaca, caballo, oveja, etc.– Compost: Consiste en aprovechar el resultado de la descomposición de restos orgánicos como ramas, hojas, o césped, entre otras. Aplicándolo, ayudamos a la regeneración de la vida microbiana de la tierra y además estamos mejorando la textura y composición química del suelo.– Turba: la hay de dos tipos, negra y rubia. Se emplean mucho como base para preparar substratos para macetas y para hacer semilleros. También son buenas paraadicionar al terreno.");

  //         receivedBox.appendChild(textoBot);
  //         receivedMsg.appendChild(receivedBox);

  //         chatImage.appendChild(img);
  //         receivedChat.appendChild(chatImage);
  //         receivedChat.appendChild(receivedMsg);

  //         contenedorMensaje.appendChild(receivedChat);

  //         event.preventDefault();

  //     }, 1500);
  // }

  // if (texto == 'talleres') {
  //     window.setTimeout(function () {


  //         var receivedChat = document.createElement('div');
  //         var chatImage = document.createElement('div');
  //         var img = document.createElement('img');


  //         var receivedMsg = document.createElement('div');
  //         var receivedBox = document.createElement('div');

  //         var parrafo = document.createElement('p');



  //         receivedChat.setAttribute('class', 'received-chats');
  //         chatImage.setAttribute('class', 'received-chats-img');
  //         img.setAttribute('class', 'img-fluid');
  //         img.setAttribute('src', '../IMAGES/PNH.png');
  //         receivedMsg.setAttribute('class', 'received-msg');
  //         receivedBox.setAttribute('class', 'received-msg-inbox');

  //         var textoBot = document.createTextNode("Estos son los talleres que puedes tomar");


  //         var card = document.createElement('div');
  //         var imgCard = document.createElement('img');
  //         var cardBody = document.createElement('div');
  //         var pCard = document.createElement('p');

  //         var link =  document.createElement('a');
  //         link.setAttribute('href','http://www.domusrobotica.com.ar/blog/como-crear-un-recolector-de-agua-de-lluvia/');



  //         var textoCard = document.createTextNode('Cómo crear un recolector de agua de lluvia')

  //         card.setAttribute('class','card');
  //         card.setAttribute('style','width: 18rem;');

  //         imgCard.setAttribute('src','../IMAGES/agua.jpg');
  //         imgCard.setAttribute('class','card-img-top');
  //         cardBody.setAttribute('click','card-img-top');
  //         pCard.setAttribute('class','card-text');

  //         pCard.appendChild(textoCard);
  //         cardBody.appendChild(pCard);
  //         card.appendChild(imgCard);
  //         card.appendChild(cardBody);

  //         link.appendChild(card);
          


  //         receivedBox.appendChild(textoBot);
  //         receivedMsg.appendChild(receivedBox);

  //         chatImage.appendChild(img);
  //         receivedChat.appendChild(chatImage);
  //         receivedChat.appendChild(receivedMsg);

  //         contenedorMensaje.appendChild(receivedChat);
  //         contenedorMensaje.appendChild(link);

  //         event.preventDefault();

  //     }, 1500);
  // }

  
  



  // Plagas



  


}



// Your web app's Firebase configuration
