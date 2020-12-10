var MonPrenom ;
var Monemail = sessionStorage.getItem('email');
var mybutton;

window.addEventListener("load",function () {
    mybutton = document.getElementById('myBtn');
    document.getElementById('email').innerHTML = Monemail;
    redirection()

  })


function chgt() {

  if (document.getElementById('Prenom').value != "") {
    MonPrenom = document.getElementById('Prenom').value;
    sessionStorage.setItem('Prénom',MonPrenom);
    document.getElementById('MonPrénom').innerHTML = MonPrenom
    
  } 
  if (document.getElementById('Nom').value != "") {
    MonNom = document.getElementById('Nom').value;
    sessionStorage.setItem('Nom',MonNom)
    document.getElementById('MonNom').innerHTML = MonNom
  } 

  if (document.getElementById('Adresse').value != "") {
    MonAdresse = document.getElementById('Adresse').value;
    document.getElementById('MonAdresse').innerHTML = MonAdresse
  } 

  if (document.getElementById('Ville').value != "") {
    MaVille = document.getElementById('Ville').value;
    document.getElementById('MaVille').innerHTML = MaVille
  } 

  if (document.getElementById('CodePostal').value != "") {
    MonCodePostal = document.getElementById('CodePostal').value;
    document.getElementById('MonCodePostal').innerHTML = MonCodePostal
  } 

  if (document.getElementById('Pays').value != "") {
    MonPays = document.getElementById('Pays').value;
    document.getElementById('MonPays').innerHTML = MonPays
  }

  if (document.getElementById('Tel').value != "" ) {
    MonTel = document.getElementById('Tel').value;
    sessionStorage.setItem('Tel',MonTel)
    document.getElementById('MonTel').innerHTML = MonTel
  } 

  if (document.getElementById('CarteBleu').value != "" ) {
    MaCarteBleu = document.getElementById('CarteBleu').value;
    document.getElementById('MaCarte').innerHTML = MaCarteBleu
  } 

  if (document.getElementById('CodeSecu').value != "" ) {
    MonCodeSecu = document.getElementById('CodeSecu').value;
    document.getElementById('MonCode').innerHTML = MonCodeSecu
  } 
  }

  function ModifMDP() {
    if(document.getElementById('AncienMDP').value==localStorage.getItem('password') && document.getElementById('NewMDP').value==document.getElementById('confirmMDP').value ){
    localStorage.setItem('password',document.getElementById('NewMDP').value)
    document.getElementById('AncienMDP').value=''
    document.getElementById('NewMDP').value=''
    document.getElementById('confirmMDP').value=''
    }
  else {
    alert('Erreur mauvais mot de passe')
  }
  }