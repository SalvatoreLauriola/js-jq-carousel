$(document).ready(function(){   // Inizio document ready

  // Referenze delle variabili

var btnDx = $('.icon-dx > i'); // Bottone destro

var btnSx = $('.icon-sx > i'); //Bottone sinistro

var firstImg = $('.first'); //Selettore prima immagine

var lastImg = $('.last'); //Selettore ultima immagine

var firstCircle = $('.first2'); //Selezione primo cerchio

var lastCircle = $('.last2'); //Selezione ultimo cerchio



// - Eventi -

// Richiamo la funzione al click.
btnDx.click(function (){
  // Variabile che seleziona l'immagine dell'html
  var selected = $('.wallpaper img.active')
  // Richiamo la funzione che rimuove active se presente e lo da alla immagine successiva.
  arrow(selected, firstImg);
  // Variabile che seleziona il cerchio in html.
  var selected2 = $('.circlebox .circle.active2')
  // Richiamo la funzione che rimuove active se presente e lo da al cerchio successivo.
  circle(selected2, firstCircle);
});



btnSx.click(function (){
  var selected = $('.wallpaper img.active')
  arrow2(selected, lastImg);
  var selected2 = $('.circlebox .circle.active2')
  circle2(selected2, lastCircle)
  
});

$(document).keydown(function (key){

  if(key.keyCode == 37) {
    var selected = $('.wallpaper img.active')
    arrow2(selected, lastImg);
    
    var selected2 = $('.circlebox .circle.active2')
    circle2(selected2, lastCircle)
    
  } else if(key.keyCode == 39) {
    var selected = $('.wallpaper img.active');
    arrow(selected, firstImg);
    var selected2 = $('.circlebox .circle.active2');
    circle(selected2, firstCircle);
  }
})



});  //end ready

// Creazione funzioni da riutilizzare, anche fuori dal document.

function circle (valore1, valore2){
  valore1.removeClass('active2');
  valore1.next().addClass('active2');
  if (valore1.hasClass('last2')){
    valore2.addClass('active2');
  }
}

function arrow (valore1, valore2){
  valore1.removeClass('active');
  valore1.next().addClass('active');
  if (valore1.hasClass('last')){
    valore2.addClass('active');
  }  
}

function circle2 (valore1, valore2){
  valore1.removeClass('active2');
  valore1.prev().addClass('active2');
  if (valore1.hasClass('first2')){
    valore2.addClass('active2');
  }
}

function arrow2 (valore1, valore2){
  valore1.removeClass('active');
  valore1.prev().addClass('active');
  if (valore1.hasClass('first')){
    valore2.addClass('active');
  }  
}