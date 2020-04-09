$(document).ready(function(){



// references

var btnDx = $('.icon-dx > i');
var btnSx = $('.icon-sx > i');

var firstImg = $('.first');
var lastImg = $('.last');

var firstCircle = $('.first2');
var lastCircle = $('.last2');


btnDx.click(function (){
  var selected = $('.wallpaper img.active')
  
  
  selected.removeClass('active');
  selected.next().addClass('active');
  if (selected.hasClass('last')){
    firstImg.addClass('active');
    
  }
  var selected2 = $('.circlebox .circle.active2')
  selected2.removeClass('active2');
  selected2.next().addClass('active2');
  if (selected2.hasClass('last2')){
    firstCircle.addClass('active2');
  }
})

btnSx.click(function (){
  var selected = $('.wallpaper img.active')
 

  selected.removeClass('active');
  selected.prev().addClass('active');
  if (selected.hasClass('first')){
    lastImg.addClass('active');
  }
  var selected2 = $('.circlebox .circle.active2')
  selected2.removeClass('active2');
  selected2.prev().addClass('active2');
  if (selected2.hasClass('first2')){
    lastCircle.addClass('active2');
  }
  
})






















});  //end ready