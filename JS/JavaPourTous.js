
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

//Pris sur Howto
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Afficher les élements filtré
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Cacher les élements non selec
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

for (var i = 0; i < btnsFiltre.length; i++) {
  btnsFiltre[i].addEventListener("click", function() {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("principal").style.marginLeft= "0";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("principal").style.marginLeft= "0";

}