class ListeVoyage {
    constructor(nom,ville,lien) {
        this._nom=nom;
        this._ville=ville; 
        this._lien=lien;
        /*this.temperature=temerature (le degre et pas le lien api) */
    }
}

let Voyage1=new ListeVoyage('Venise','../Image/Europe/Venise.jpeg' ,'PageInfosVenise.html');
let Voyage2=new ListeVoyage('Athènes','../Image/Europe/Athènes.jpeg' ,'PageInfosAthènes.html');
var Voyage3=new ListeVoyage('Hong-Kong','../Image/Asie/Hong-Kong.jpeg' ,'PageInfosHong-Kong.html');
var Voyage4=new ListeVoyage('Tokyo','../Image/Asie/Tokyo.jpeg' ,'PageInfosTokyo.html');
var Voyage5=new ListeVoyage('Sydney','../Image/Océanie/Sydney.jpeg' ,'PageInfosSydney.html');
var Voyage6=new ListeVoyage('Johannesburg','../Image/Afrique/Johannesburg.jpeg' ,'PageInfosJohannesburg.html');
var Voyage7=new ListeVoyage('Marrakech','../Image/Afrique/Marrakech.jpeg','PageInfosMarrakech.html');
var Voyage8=new ListeVoyage('Hawaii','../Image/Amérique/Hawaii.jpeg' ,'PageInfosHawaii.html');
var Voyage9=new ListeVoyage('NewYork','../Image/Amérique/NewYork.jpeg' ,'PageInfosNewYork.html');
var Voyage10=new ListeVoyage('LasVegas','../Image/Amérique/LasVegas.jpeg' ,'PageInfosLasVegas.html');


const ListeVoyages = [Voyage1,Voyage2,Voyage3,Voyage4,Voyage5,Voyage6,Voyage7,Voyage8,Voyage9,Voyage10];



let template = document.querySelector("#ListeVoyage")
 for (const v of ListeVoyages){
     console.log(v)
     let clone=document.importNode(template.content, true);
     newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, v._nom)
        .replace(/{{ville}}/g, v._ville)
        .replace(/{{lien}}/g, v._lien);
    clone.firstElementChild.innerHTML = newContent;
    document.getElementById("Destination").appendChild(clone)
 }
 /*
let TVenise = "https://api.openweathermap.org/data/2.5/weather?q=Venise&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TAthènes = "https://api.openweathermap.org/data/2.5/weather?q=Athènes&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let THongKong ="https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TTokyo ="https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TSydney ="https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TJohannesburg ="https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TMarrakech ="https://api.openweathermap.org/data/2.5/weather?q=Marrakech&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let THawaii ="https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TNewYork ="https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
let TLasVegas ="https://api.openweathermap.org/data/2.5/weather?q=Las Vegas&appid=5c94e08c097f3277a355b6688d8a6b24&units=metric"
const ListeTemperature = [TVenise,TAthènes,TTokyo,TJohannesburg,TMarrakech,THawaii,TNewYork,TLasVegas]
*/
 function Température() {
    fetch("Température")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        document.getElementById("myp").innerHTML= myJson["main"]["temp"] + "°C"
    })
  }