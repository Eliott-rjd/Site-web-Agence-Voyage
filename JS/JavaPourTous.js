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

function login() {
  mdpL=document.getElementById('connectpwd').value;
  userL=document.getElementById('connectid').value;
  if (userL==localStorage.getItem('user') && mdpL==localStorage.getItem('password')){
    sessionStorage.setItem('isConnected','true');
} else{
    alert('Désolé, le mot de passe ou le pseudo rentré est invalide');
}
}



function Register() {
  mdpR=document.getElementById('MotDePasseR').value;
  mdpRepeat=document.getElementById('repeat').value;
  userR=document.getElementById('UtilisateurR').value;

  if(mdp == mdpRepeat && user !=localStorage.getItem('user')) {
  sessionStorage.setItem('password',mdp)
  localStorage.setItem('user',user);
  document.getElementsByClassName('register').style.display='none';
  newspan.innerHTML="Vous vous etes bien incrit, veuillez vous connecter.";
  newdiv.append(newspan)
  newdiv.setAttribute('id','registerSuccess');
  newdiv.display='block';
  document.getElementById('Formulaire').append(newdiv);
} else if(user==localStorage.getItem('user')){
  alert('Vous êtes déjà inscrit sous ce pseudo');
}
}

function isConnected(){
  if(sessionStorage.getItem('isConnected')==='true'){
    window.open("../HTML/Mon Compte-info")
  }
}


function déconnexion() {
  sessionStorage.clear();
  window.location.reload();
  }

