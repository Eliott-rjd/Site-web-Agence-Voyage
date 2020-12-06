
var mybutton;
var Select;
var current
var btnContainer
var btnsFiltre
var current

window.onload = function () {
  mybutton = document.getElementById('myBtn')
  btnContainer = document.getElementById("continents");
  btnsFiltre = btnContainer.getElementsByClassName("BoutonFiltre");
  current = document.getElementsByClassName("active");
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}