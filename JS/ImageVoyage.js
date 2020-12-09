var mybutton;



window.onload = function () {
    Temperature()
    mybutton = document.getElementById('myBtn')
    //onload mybutton sur ce fichier aussi, sinon il n'apparait pas
    
}

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
var Voyage3=new ListeVoyage('Hong-Kong','../Image/Asie/Hong-Kong.jpeg' ,'3','2','500','false',"https://api.openweathermap.org/data/2.5/weather?q=HongKong&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage4=new ListeVoyage('Tokyo','../Image/Asie/Tokyo.jpeg' ,'4','2','800','true',"https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage5=new ListeVoyage('Sydney','../Image/Océanie/Sydney.jpeg' ,'5','4','800','true',"https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage6=new ListeVoyage('Johannesburg','../Image/Afrique/Johannesburg.jpeg' ,'6','3','100','true',"https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage7=new ListeVoyage('Marrakech','../Image/Afrique/Marrakech.jpeg','7','3','200','false',"https://api.openweathermap.org/data/2.5/weather?q=Marrakech&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage8=new ListeVoyage('Hawaii','../Image/Amérique/Hawaii.jpeg' ,'8','1','1000','true',"https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage9=new ListeVoyage('NewYork','../Image/Amérique/NewYork.jpeg' ,'9','1','1000','true',"https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage10=new ListeVoyage('LasVegas','../Image/Amérique/LasVegas.jpeg' ,'10','1','900','false',"https://api.openweathermap.org/data/2.5/weather?q=LasVegas&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");


const ListeVoyages = [Voyage1,Voyage2,Voyage3,Voyage4,Voyage5,Voyage6,Voyage7,Voyage8,Voyage9,Voyage10];

//Faire la liste des température à partir des différents liens
//Pour pouvoir les modifier plus tard
Tempe=[]
function Temperature(){
    for(i = 0; i < ListeVoyages.length; i++){
    fetch(ListeVoyages[i]['_temperature'])
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        Tempe.push(myJson["main"]["temp"] + "°C")
        Filtrage()
        //La fonction temperature est lancé au lancement de la page pour modifier 
        //les température dans un premier temps puis on appel le filtre pour que les
        //temperature s'affiche correctement sur les images au lancement 
    })
    }
    
}
//Comment la charge avant les autres ?

let template = document.querySelector("#ListeVoyage");
const initial = document.getElementById('Destination').innerHTML;

function Filtrage() {

    for(i = 0; i < Tempe.length; i++){
        ListeVoyages[i]['_temperature'] = Tempe[i]
        }

    var VoyageFiltre = [];
    div = document.getElementById('Destination');
    div.innerHTML=initial;

    prixMax = parseInt(document.getElementById('prixmax').value);
    FiltreContinent =parseInt(document.getElementById('continents').value);
    

    //Filtre
    for (i = 0; i < ListeVoyages.length; i++) {
        if (ListeVoyages[i]['_prix'] <= prixMax && (ListeVoyages[i]['_continent'] == FiltreContinent ||FiltreContinent == 5)) {
            VoyageFiltre.push(ListeVoyages[i])
        }
    }
    //Affichage dynamique
    for (var k of VoyageFiltre){
        
        let clone=document.importNode(template.content, true);
        newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, k._nom)
        .replace(/{{ville}}/g, k._ville)
        .replace(/{{id}}/g, k._id)
        .replace(/{{prix}}/g, k._prix)
        .replace(/{{temperature}}/g, k._temperature);
        
    clone.firstElementChild.innerHTML = newContent;
    document.getElementById("Destination").appendChild(clone)
}

}



