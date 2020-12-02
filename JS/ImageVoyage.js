class ListeVoyage {
    constructor(nom,ville,id,continent,temperature) {
        this._nom=nom;
        this._ville=ville; 
        this._id=id;
        this._continent=continent;
        this._temperature=temperature
    }
}

let Voyage1=new ListeVoyage('Venise','../Image/Europe/Venise.jpeg' ,'1','Europe',"https://api.openweathermap.org/data/2.5/weather?q=Venise&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
let Voyage2=new ListeVoyage('Athènes','../Image/Europe/Athènes.jpeg' ,'2','Europe',"https://api.openweathermap.org/data/2.5/weather?q=Athènes&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage3=new ListeVoyage('Hong-Kong','../Image/Asie/Hong-Kong.jpeg' ,'3','Asie',"https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage4=new ListeVoyage('Tokyo','../Image/Asie/Tokyo.jpeg' ,'4','Asie',"https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage5=new ListeVoyage('Sydney','../Image/Océanie/Sydney.jpeg' ,'5','Océanie',"https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage6=new ListeVoyage('Johannesburg','../Image/Afrique/Johannesburg.jpeg' ,'6','Afrique',"https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage7=new ListeVoyage('Marrakech','../Image/Afrique/Marrakech.jpeg','7','Afrique',"https://api.openweathermap.org/data/2.5/weather?q=Marrakech&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage8=new ListeVoyage('Hawaii','../Image/Amérique/Hawaii.jpeg' ,'8','Amérique',"https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage9=new ListeVoyage('NewYork','../Image/Amérique/NewYork.jpeg' ,'9','Amérique',"https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");
var Voyage10=new ListeVoyage('LasVegas','../Image/Amérique/LasVegas.jpeg' ,'10','Amérique',"https://api.openweathermap.org/data/2.5/weather?q=Las Vegas&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric");


const ListeVoyages = [Voyage1,Voyage2,Voyage3,Voyage4,Voyage5,Voyage6,Voyage7,Voyage8,Voyage9,Voyage10];



let template = document.querySelector("#ListeVoyage");

for (const v of ListeVoyages){
    console.log(v)

    let clone=document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
    .replace(/{{nom}}/g, v._nom)
    .replace(/{{ville}}/g, v._ville)
    .replace(/{{id}}/g, v._id)
    .replace(/{{temperature}}/g, v._temperature);
    
clone.firstElementChild.innerHTML = newContent;
document.getElementById("Destination").appendChild(clone)


function Température() {
    fetch(v._temperature)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        document.getElementById("myp").innerHTML= myJson["main"]["temp"] + "°C"
    })
    }

}
