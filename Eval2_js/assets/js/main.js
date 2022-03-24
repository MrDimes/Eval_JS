let saisie = document.getElementById('saisie');
let form = document.getElementById('monForm');
let btn2 = document.getElementById('btn2');
let erreur = document.getElementById('erreur');
let boutonValidation = document.getElementById('btn1');
let nombreChoisi;
//const body = document.getElementsByTagName("body")[0];

saisie.addEventListener('keyup', () => {
    if (isInValideSaisie(saisie.value)) {
        //On affiche le message d'erreur
        erreur.style.display = 'inline';
        erreur.innerText = 'Un nombre est attendu en saisie';
        boutonValidation.disabled = true;
    } else {
        //On masque le message d'erreur
        erreur.style.display = 'none';
        boutonValidation.disabled = false;
    }
});

form.addEventListener('submit', function (e) {
    //On desasctive le comportement par defaut du navigateur
    e.preventDefault();
    //body.removeChild('reponse');


    //On verifie les infos saisie par l'utilisateur
    if (isInValideSaisie(saisie.value)) {
        //On met une couleur de bordure rouge
        saisie.style.borderColor = 'red';
    } else {
        nombreChoisi = saisie.value;

        //On reinitialise le champ de saisie
        saisie.value = '';

        let fahreneit = nombreChoisi * 9/5 + 32;
        let reponse = document.createElement('p');
        reponse.textContent = `${nombreChoisi}°C  =  ${fahreneit}°F`;
        document.getElementById('reponse').prepend(reponse);

        //On appelle la fonction de verification
        //convertir(nombreChoisi);
    }
});

const isInValideSaisie = (chaine) => {
    chaine = chaine.trim();
    return (chaine.length === 0 || isNaN(chaine));
}


/*function convertir(a) {
    let fahreneit = nombreChoisi * 9/5 + 32;
    let instruction = document.createElement('p');
    instruction.textContent = `${nombreChoisi}°C  =  ${fahreneit}°F`;
    document.getElementById('instruction').prepend(instruction);
}*/

btn2.addEventListener('submit', function (e) {
    saisie.value = '';
});


