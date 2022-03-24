let btn1 = document.getElementsClassName('btn-nouveau'),
    btn2 = document.getElementsClassName('btn-lancer'),
    btn3 = document.getElementsClassName('btn-commuter'),
    img = document.getElementsClassName('de'),
    global1 = document.getElementById('score-1'),
    global2 = document.getElementById('score-2'),
    enCours1 = document.getElementById('encours-1'),
    enCours2 = document.getElementById('encours-2'),
    joueur,
    encours,
    nb = Math.floor(Math.random() * 6) + 1,
    src = img.getAttribute('src'),
    global;

    
    

btn1.addEventListener("click",() => {
    joueur = 'joueur1';
    global1.innerText = '0';
    global2.innerText = '0';
    enCours1.innerText = '0';
    enCours2.innerText = '0';
});

btn2.addEventListener("click",() => {
    nb;
    encours += nb;
    changeImg();
    if(nb == 1){
        changeJoueur();
    } else {
        if(joueur == 'joueur1'){
            enCours1.innerText = encours;
            return enCours1.innerText;
        } else {
            enCours2.innerText = encours;
            return enCours2.innerText;
        }
        if(encours + global >=)
    }
});

function changeImg() {
    switch(nb){
        case 1 :
        img.src = "./resources/images/de-1.png"
        break; 
        case 2 :
        img.src = "./resources/images/de-2.png"
        break;
        case 3 :
        img.src = "./resources/images/de-3.png"
        break;
        case 4 :
        img.src = "./resources/images/de-4.png"
        break;
        case 5 :
        img.src = "./resources/images/de-5.png"
        break;
        case 6 :
        img.src = "./resources/images/de-6.png"
        break;   
    }
}

function changeJoueur() {
    if(joueur == "joueur1") {
        joueur = "joueur2";
    } else {
        joueur = "joueur1";
    }
}



