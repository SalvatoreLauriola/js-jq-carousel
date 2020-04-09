$(document).ready(function(){



// references

var btnDx = $('.icon-dx > i');
var btnSx = $('.icon-sx > i');
var img = $('.wallpaper img')



btnDx.click(function (){
  var selected = $('.wallpaper img.active')
  if (selected.hasClass('active')) {

    selected.removeClass('active');
    selected.next().addClass('active');
  
  }
  
})

btnSx.click(function (){
  var selected = $('.wallpaper img.active')
  if (selected.hasClass('active')) {

    selected.removeClass('active');
    selected.prev().addClass('active');
  
  }
  
})






















});  //end ready