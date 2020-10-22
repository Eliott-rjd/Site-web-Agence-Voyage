
var mybutton;
var MesContinents;
var Select;
var current

window.onload = function () {
  mybutton = document.getElementById('myBtn')
  MesContinents = document.getElementById('continents');
  Select = MesContinents.getElementsByClassName('BoutonFiltre');
  current = document.getElementsByClassName('active');
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


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i],"show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i],"show");
  }
  

}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

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

for (var i = 0; i < Select.length; i++) {
  Select[i].addEventListener("click", function () {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
