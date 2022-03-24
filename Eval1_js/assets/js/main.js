let monForm = document.appForm;
let saisie = document.getElementById('saisie');
let secret = Math.floor(Math.random() * 10) + 1;
let tentative = 0;
let trouver = false;
let essai = saisie.innerText;

function soumission(e){
    e.preventDefault();
    tentative++;
    do {
    if (document.getElementById('affichage')) {
        document.body.removeChild(document.getElementById('affichage'));
    }    
    if (essai > secret) {
        console.log('Trop Grand');
        let divAffichage = document.createElement('div');
        divAffichage.setAttribute('id', 'affichage');
        divAffichage.innerText = `Mauvaise réponse trop grand`;
        document.body.appendChild(divAffichage);
    } else if (essai < secret) {
        console.log('Trop Petit');
        let divAffichage = document.createElement('div');
        divAffichage.setAttribute('id', 'affichage');
        divAffichage.innerText = `Mauvaise réponse trop petit`;
        document.body.appendChild(divAffichage);
    } else {
        let divAffichage = document.createElement('div');
        divAffichage.setAttribute('id', 'affichage');
        divAffichage.innerText = `BRAVO ! Vous avez trouvé en ${tentative} essais`;
        document.body.appendChild(divAffichage);
        trouver = true;
    }
    } while (!trouver);
}


    if (isNaN(essai) || essai === 0) {
        let divAffichage = document.createElement('div');
        divAffichage.setAttribute('id', 'affichage');
        divAffichage.innerText = `Vous devez saisir un entier compris entre 1 & 10`;
        document.body.appendChild(divAffichage);
    }

monForm.addEventListener('submit', soumission);



    


