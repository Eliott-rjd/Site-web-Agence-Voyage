function CalcPrix(){
let jourd= parseInt(Réservation.html.getElementById("jourd").value,10)
let moid= parseInt(Réservation.html.getElementById("moid").value,10)
let jourr= parseInt(Réservation.htlm.getElementById("jourr").value,10)
let moir= parseInt(Réservation.htlm.getElementById("moir").value,10)
let adultes= parseInt(Réservation.htlm.getElementById("adultes").value,10)
let enfants= parseInt(Réservation.htlm.getElementById("enfants").value,10)
let déj= parseInt(Réservation.htlm.getElementById("subscribedéj").value,10)

p_adultes = p_standard_jour
p_adultes_tot = p_adultes*adultes
p_enfants = 0,4*p_adultes
p_enfants_tot = p_enfants*enfants
p_déj = "12"
p_déj_tot = p_déj*(adultes+enfants)*nb_jours

Réservation.htlm.getElementById("résultat").innerHTML= ()
}