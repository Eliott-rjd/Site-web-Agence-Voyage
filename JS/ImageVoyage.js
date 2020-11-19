class ListeVoyage {
    constructor(nom,ville,lien) {
        this._ville=ville; 
        this._lien=lien;
        this._nom=nom;
    }
}

let Voyage1=new ListeVoyage('Venise','../Image/Europe/Venise.jpeg' ,'PageInfosVenise.html');
let Voyage2=new ListeVoyage('Athènes','../Image/Europe/Athènes.jpeg' ,'PageInfosAthènes.html');
var Voyage3=new ListeVoyage('Hong-Kong','../Image/Asie/Hong-Kong.jpeg' ,'PageInfosHong-Kong.html');
var Voyage4=new ListeVoyage('Tokyo','../Image/Asie/Tokyo.jpeg' ,'PageInfosTokyo.html');
var Voyage5=new ListeVoyage('Sydney','../Image/Océanie/Sydney.jpeg' ,'PageInfosSydney.html');
var Voyage6=new ListeVoyage('Johannesbyrg','../Image/Afrique/Johannesburg.jpeg' ,'PageInfosJohannesburg.html');
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



