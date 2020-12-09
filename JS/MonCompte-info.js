var MonPrenom ;


window.onload = function () {
    mybutton = document.getElementById('myBtn')
    MonPrenom = document.getElementById('Prenom').value;
    chgt()
  }


var Monemail = localStorage.getItem('user')
function chgt() {
document.getElementById('email').innerHTML = Monemail
document.getElementById('MonPrénom').innerHTML = MonPrenom
}
