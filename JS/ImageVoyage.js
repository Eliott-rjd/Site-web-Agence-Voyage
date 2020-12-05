class ListeVoyage {
    constructor(nom,ville,id,continent,prix,temperature) {
        this._nom=nom;
        this._ville=ville; 
        this._id=id;
        this._continent=continent;
        this._prix=prix;
        this._temperature=temperature;
    }
}

let Voyage1=new ListeVoyage('Venise','../Image/Europe/Venise.jpeg' ,'1','Europe','200',"https://api.openweathermap.org/data/2.5/weather?q=Venise&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
let Voyage2=new ListeVoyage('Athènes','../Image/Europe/Athènes.jpeg' ,'2','Europe','100',"https://api.openweathermap.org/data/2.5/weather?q=Athènes&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage3=new ListeVoyage('Hong-Kong','../Image/Asie/Hong-Kong.jpeg' ,'3','Asie','500',"https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage4=new ListeVoyage('Tokyo','../Image/Asie/Tokyo.jpeg' ,'4','Asie','800',"https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage5=new ListeVoyage('Sydney','../Image/Océanie/Sydney.jpeg' ,'5','Océanie','800',"https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage6=new ListeVoyage('Johannesburg','../Image/Afrique/Johannesburg.jpeg' ,'6','Afrique','100',"https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage7=new ListeVoyage('Marrakech','../Image/Afrique/Marrakech.jpeg','7','Afrique','200',"https://api.openweathermap.org/data/2.5/weather?q=Marrakech&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage8=new ListeVoyage('Hawaii','../Image/Amérique/Hawaii.jpeg' ,'8','Amérique','1000',"https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage9=new ListeVoyage('NewYork','../Image/Amérique/NewYork.jpeg' ,'9','Amérique','1000',"https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage10=new ListeVoyage('LasVegas','../Image/Amérique/LasVegas.jpeg' ,'10','Amérique','900',"https://api.openweathermap.org/data/2.5/weather?q=Las Vegas&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");


const ListeVoyages = [Voyage1,Voyage2,Voyage3,Voyage4,Voyage5,Voyage6,Voyage7,Voyage8,Voyage9,Voyage10];



let template = document.querySelector("#ListeVoyage");
const initial = document.getElementById('Destination').innerHTML;


function Filtrage() {
    var VoyageFiltre = [];
    
    div = document.getElementById('Destination');
    div.innerHTML=initial;

    prixMax = parseInt(document.getElementById('prixmax').value);
    console.log(prixMax)
    for (i = 0; i < ListeVoyages.length; i++) {
        if (ListeVoyages[i]['_prix'] <= prixMax) {
            console.log(ListeVoyages[i]['_prix'])
            VoyageFiltre.push(ListeVoyages[i])
            console.log(VoyageFiltre)
        }
    }

    for (var k of VoyageFiltre){
        
        let clone=document.importNode(template.content, true);
        newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, k._nom)
        .replace(/{{ville}}/g, k._ville)
        .replace(/{{id}}/g, k._id)
        .replace(/{{prix}}/g, k._prix);
        
    clone.firstElementChild.innerHTML = newContent;
    document.getElementById("Destination").appendChild(clone)
}

}



//function Température() {
//    fetch(v._temperature)
//    .then(function(response) {
//        return response.json();
//    })
//    .then(function(myJson) {
//        document.getElementById("myp").innerHTML= myJson["main"]["temp"] + "°C"
//    })
//   }

