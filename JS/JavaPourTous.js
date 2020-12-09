var mybutton;
var Select;


window.onload = function () {
  mybutton = document.getElementById('myBtn')
  
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
function openMap() {
  document.getElementById("Map").style.height = "100%";
}

function closeMap() {
  document.getElementById("Map").style.height = "0%";
}



function register(){
    if(document.getElementById('MotDePasseR').value==document.getElementById('repeat').value && document.getElementById('UtilisateurR').value!=localStorage.getItem('user')){
        localStorage.setItem('password',(document.getElementById('MotDePasseR').value));
        localStorage.setItem('user',(document.getElementById('UtilisateurR').value));
    } else if(document.getElementById('UtilisateurR').value==localStorage.getItem('user')){
        alert('Vous êtes déjà inscrit');
    }
    else{
      alert('Entrer le même mot de passe');
  }
}
function SeConnecter(){
    if (document.getElementById('UtilisateurL').value==localStorage.getItem('user') && document.getElementById('MotDePasseL').value==localStorage.getItem('password')){
        sessionStorage.setItem('isConnected','true');
        isConnected();
    } else{
        alert('Mot de passe ou utilisateur invalide');
    }
}
function isConnected(){
    if(sessionStorage.getItem('isConnected')=='true'){
      document.getElementById('compte').href = '../HTML/MonCompte-info.html';
      window.location.href = '../HTML/MonCompte-info.html';
    }
}

function déconnexion(){
    sessionStorage.clear();
    window.location.reload();
}