class ListeVoyage {
    constructor(nom,destination,lien) {
        this._destination=destination; 
        this._lien=lien;
        this._nom=nom;
    }
}

let Voyage1=new ListeVoyage('Italie','../Image/Europe/Italie1.jpeg' ,'PageInfosItalie.html');
let Voyage2=new ListeVoyage('Grèce','../Image/Europe/Grèce1.jpeg' ,'PageInfosGrèce.html');
var Voyage3=new ListeVoyage('Chine','../Image/Asie/Chine1.jpeg' ,'PageInfosChine.html');
var Voyage4=new ListeVoyage('Japon','../Image/Asie/Japon1.jpeg' ,'PageInfosJapon.html');
var Voyage5=new ListeVoyage('Australie','../Image/Océanie/Australie1.jpeg' ,'PageInfosAustralie.html');
var Voyage6=new ListeVoyage('AfriqueDuSud','../Image/Afrique/AfriqueDuSud1.jpeg' ,'PageInfosAfriqueDuSud.html');
var Voyage7=new ListeVoyage('Maroc','../Image/Afrique/Maroc1.jpeg','PageInfosMaroc.html');
var Voyage8=new ListeVoyage('Hawaii','../Image/Amérique/Hawaii1.jpeg' ,'PageInfosHawaii.html');
var Voyage9=new ListeVoyage('Etats-Unis','../Image/Amérique/Etats-Unis1.jpeg' ,'PageInfosEtats-Unis.html');

const ListeVoyages = [Voyage1,Voyage2,Voyage3,Voyage4,Voyage5,Voyage6,Voyage7,Voyage8,Voyage9];



let template = document.querySelector("#ListeVoyage")
 for (const v of ListeVoyages){
     console.log(v)
     let clone=document.importNode(template.content, true);
     newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, v._nom)
        .replace(/{{destination}}/g, v._destination)
        .replace(/{{lien}}/g, v._lien);
    clone.firstElementChild.innerHTML = newContent;
    document.getElementById("Destination").appendChild(clone)
 }



