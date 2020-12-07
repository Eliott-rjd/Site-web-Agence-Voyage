function CalcPrix(){
    let jourd= parseInt(document.getElementById("jourd").value,10)
    let moisd= parseInt(document.getElementById("moisd").value,10)
    let annéed= parseInt(document.getElementById("annéed").value,10)
    let jourr= parseInt(document.getElementById("jourr").value,10)
    let moisr= parseInt(document.getElementById("moisr").value,10)
    let annéer= parseInt(document.getElementById("annéer").value,10)
    let adultes= parseInt(document.getElementById("adultes").value,10)
    let enfants= parseInt(document.getElementById("enfants").value,10)
    let déj= document.getElementById("subscribedéj").checked
    let Prénom = document.getElementById("prénom")
    let Nom = document.getElementById("nom")
    let email = document.getElementById("email")
    let num_téléphone = parseInt(document.getElementById("télépĥone").value,10)
    
    document.getElementById("prénom_recap").innerHTML= Prénom
    document.getElementById("nom_recap").innerHTML= Nom
    document.getElementById("email_recap").innerHTML= email
    document.getElementById("téléphone_recap").innerHTML= num_téléphone
    document.getElementById("adultes_recap").innerHTML= adultes
    document.getElementById("enfants_recap").innerHTML= enfants
    document.getElementById("jourd_recap").innerHTML= jourd
    document.getElementById("jourr_recap").innerHTML= jourr
    document.getElementById("moisd_recap").innerHTML= moisd
    document.getElementById("moisr_recap").innerHTML= moisr
    document.getElementById("annéed_recap").innerHTML= annéed
    document.getElementById("annéer_recap").innerHTML= annéer
    
    var num_réservation = math.floor(math.random()*100000)
    
    document.getElementById("num_réservation").innerHTML= num_réservation
    
    var date_d = new date(jourd/moisd/annéed)
    var date_r = new date(jourr/moisr/annéer)
    var Diff_temps = date_r.getTime() - date_d.getTime()
    var Diff_jours = Diff_temps / (1000 * 3600 * 24) 
    print(Diff_jours)
    
    let Autorisé = False
    
    if (adultes > 0) {
        Autorisé == True
    } else {
        Autorisé == False
        a = print("Il doit au moins y avoir un adulte pour valider un voyage, que ce soit pour accompagner les enfants ou pour partir en voyage");
    }
    p_standard_jour = 50
    
    
    if (Autorisé == True) {
        if (Diff_jours > 0) {
            p_adultes = p_standard_jour
            p_adultes_tot = p_adultes*adultes
            p_enfants = 0,4*p_adultes
            p_enfants_tot = p_enfants*enfants
            if (déj == True) {
                p_déj = "12"
                p_déj_tot = p_déj*(adultes+enfants)
                document.getElementById("subscribedéj_recap").innerHTML= "Voyage avec petits déjeuners"
            } else {
                p_déj_tot = "0"
                document.getElementById("subscribedéj_recap").innerHTML= "Voyage sans petit déjeuner"
            } 
            document.getElementById("résultat").innerHTML= (
            (prix_tot = (p_adultes_tot + p_enfants_tot + p_déj_tot)* Diff_jours));                
        } else {
            a = print("La date de retour doit être postérieure à la date de départ")
        }
    }
    return prix_tot
    }
