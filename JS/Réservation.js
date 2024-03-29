class ListeVoyage {
    constructor(nom,ville,id,continent,prix,animaux,temperature) {  
        this._nom=nom;
        this._ville=ville; 
        this._id=id;
        this._continent=continent;
        this._prix=prix;
        this._animaux=animaux;
        this._temperature=temperature;
    }
}

let Voyage1=new ListeVoyage('Venise','../Image/Europe/Venise.jpeg' ,'1','0','200','true',"https://api.openweathermap.org/data/2.5/weather?q=Venise&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
let Voyage2=new ListeVoyage('Athènes','../Image/Europe/Athènes.jpeg' ,'2','0','100','false',"https://api.openweathermap.org/data/2.5/weather?q=Athènes&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage3=new ListeVoyage('Hong-Kong','../Image/Asie/Hong-Kong.jpeg' ,'3','2','500','false',"https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage4=new ListeVoyage('Tokyo','../Image/Asie/Tokyo.jpeg' ,'4','2','800','true',"https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage5=new ListeVoyage('Sydney','../Image/Océanie/Sydney.jpeg' ,'5','4','800','true',"https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage6=new ListeVoyage('Johannesburg','../Image/Afrique/Johannesburg.jpeg' ,'6','3','100','true',"https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage7=new ListeVoyage('Marrakech','../Image/Afrique/Marrakech.jpeg','7','3','200','false',"https://api.openweathermap.org/data/2.5/weather?q=Marrakech&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage8=new ListeVoyage('Hawaii','../Image/Amérique/Hawaii.jpeg' ,'8','1','1000','true',"https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage9=new ListeVoyage('NewYork','../Image/Amérique/NewYork.jpeg' ,'9','1','1000','true',"https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage10=new ListeVoyage('LasVegas','../Image/Amérique/LasVegas.jpeg' ,'10','1','900','false',"https://api.openweathermap.org/data/2.5/weather?q=Las Vegas&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");


const ListeVoyages = [Voyage1,Voyage2,Voyage3,Voyage4,Voyage5,Voyage6,Voyage7,Voyage8,Voyage9,Voyage10];




let sejour_id = new URLSearchParams(window.location.search).get("id")

for(k of ListeVoyages) {
    if(sejour_id == k._id) {
        p_standard_jour = k._prix 
        nom_voyage = k._nom
        console.log(nom_voyage)
    }
}


function CalcPrix(){
    var position = window.location.href.indexOf("!")
    //Si le lien est la page de reserv(il n'y a pas de !) on entre dans le if sinon dans le recap
    L = []
    if (position == -1) {
 
    dated= document.getElementById("dated").value
    dater= document.getElementById("dater").value
    adultes= parseInt(document.getElementById("adultes").value,10)
    enfants= parseInt(document.getElementById("enfants").value,10)
    déj= document.getElementById("subscribedéj").checked
    Prénom = document.getElementById("prénom")
    Nom = document.getElementById("nom")
    email = document.getElementById("email")
    num_téléphone = (document.getElementById("téléphone"))
    num_réservation = Math.floor(Math.random()*100000)

    document.getElementById("nom_destination").innerHTML= nom_voyage
    
    var date_d = new Date(dated)
    var date_r = new Date(dater)
    var Diff_temps = date_r.getTime() - date_d.getTime()
    var Diff_jours = Diff_temps / (1000 * 3600 * 24) 
    console.log(Diff_jours)
    
    var Autorisé = 0
    
    if (adultes > 0) {
        Autorisé = 1
    } else {
        Autorisé == 0
        a = console.log("Il doit au moins y avoir un adulte pour valider un voyage, que ce soit pour accompagner les enfants ou pour partir en voyage");
    }

    if (Autorisé == 1) {
        if (Diff_jours > 0) {
            p_adultes = p_standard_jour
            p_adultes_tot = p_adultes*adultes
            if (enfants == "") {
                p_enfants_tot= 0
            } else {
            p_enfants = 0.4*p_adultes
            p_enfants_tot = p_enfants*enfants
            }
            if (déj == true) {
                p_déj = 12
                p_déj_tot = p_déj*(adultes+enfants)*Diff_jours
            } else {
                p_déj_tot = 0
            } 
            document.getElementById("résultat").innerHTML= ((prix_tot = (p_adultes_tot + p_enfants_tot + p_déj_tot) + 0.3*(p_adultes_tot + p_enfants_tot)*Diff_jours) + "€");      // Le prix par jours est calculé en fonction des dépenses sur place, soit 30% du prix du voyage par personne.          
        } else {
            a = console.log("La date de retour doit être postérieure à la date de départ")
            document.getElementById("résultat").innerHTML= (prix_tot = 0);
        }
    } else { document.getElementById("résultat").innerHTML= (prix_tot = 0);
}
} else {
    //les infos sont envoyer sur le localStorage, nous n'avons pas eu le temps de les récuperer avec un programme fonctionnel
    Prénom_recap = localStorage.getItem("Prénom")
    Nom_recap = localStorage.getItem("Nom")
    email_recap = localStorage.getItem("Email")
    dated_recap = localStorage.getItem("date_d")
    dater_recap = localStorage.getItem("date_r")
    téléphone_recap = localStorage.getItem("Téléphone")
    num_réserv = localStorage.getItem("num_réserv")
    adultes_recap = localStorage.getItem("adultes")
    enfants_recap = localStorage.getItem("enfants")
    déj_recap = localStorage.getItem("déj")
    nom_voyage = localStorage.getItem("nom_voyage")
    prix_recap = localStorage.getItem("prix")

    document.getElementById("nom_destination_recap").innerHTML= nom_voyage
    document.getElementById("prénom_recap").innerHTML= Prénom_recap
    document.getElementById("nom_recap").innerHTML= Nom_recap
    document.getElementById("email_recap").innerHTML= email_recap
    document.getElementById("téléphone_recap").innerHTML= téléphone_recap
    document.getElementById("adultes_recap").innerHTML= adultes_recap
    document.getElementById("enfants_recap").innerHTML= enfants_recap
    document.getElementById("dated_recap").innerHTML= dated_recap
    document.getElementById("dater_recap").innerHTML= dater_recap
    document.getElementById("résultat_recap").innerHTML= prix_recap
    document.getElementById("num_réservation").innerHTML= num_réserv

    if (déj_recap == true) {
        document.getElementById("subscribedéj_recap").innerHTML= "Voyage avec petits déjeuners"
    } else {
        document.getElementById("subscribedéj_recap").innerHTML= "Voyage sans petit déjeuner"
    }
}
localStorage.setItem("Prénom",Prénom)
localStorage.setItem("Nom",Nom)
localStorage.setItem("Email",email)
localStorage.setItem("date_d",dated)
localStorage.setItem("date_r",dater)
localStorage.setItem("Téléphone",num_téléphone)
localStorage.setItem("num_réserv",num_réservation)
localStorage.setItem("adultes",adultes)
localStorage.setItem("enfants",enfants)
localStorage.setItem("déj",déj)
localStorage.setItem("nom_voyage",nom_voyage)
localStorage.setItem("prix",prix_tot)

}

function Modif(){
    window.history.back()
}