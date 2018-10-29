var place = 0;
var colorList = ['pink-theme','white-theme'];
document.getElementById('change-theme-btn').addEventListener('click', function(){
     if (place === colorList.length){place=0;}
     document.body.classList.toggle(colorList[place]);
     place++;});
$(document).ready(function(){
  AOS.init({duration:1500,});
  var menu = $('#Secondary');
  var menulink = $('.burger');
  var secNav = $('.secondaryNav');
  var menuItems = $('.menu__item');
  menulink.click(function(){
    menulink.toggleClass('active');
    menu.toggleClass('open');
    secNav.toggleClass('activeSecNav');
    menuItems.toggleClass('activeItems');
    return false;});});
