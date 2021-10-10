function draw() {
    var canvas = document.getElementById('horloge');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.font = '25px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText("3", 285, 180);
    ctx.fillText("6", 155, 300);
    ctx.fillText("9", 25, 180);
    ctx.fillText("12", 145, 40);
    ctx.closePath();

    ctx.beginPath();
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText("1", 220, 60);
    ctx.fillText("2", 270, 110);
    ctx.fillText("4", 270, 245);
    ctx.fillText("5", 220, 285);
    ctx.fillText("7", 90, 285);
    ctx.fillText("8", 45, 245);
    ctx.fillText("10", 45, 110);
    ctx.fillText("11", 90, 60);
}

/**
 * Déclaration des variables 
*/

var heure = document.getElementsByClassName('aiguille-heure');
var minute = document.getElementsByClassName('aiguille-minute');
var seconde = document.getElementsByClassName('aiguille-seconde');

/**
 * Fonction pour définir la date actuelle
*/

function setDate() {

    const now = new Date();

    /**
     * --------------------
     * getSeconds
     * Renvoie les secondes/minutes/heures pour la date renseignée 
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
     * --------------------
     * style.transform
     * Ajoute du site à l'élément avec la classe associée
     * Rotate : pour chaque seconde, minute, heure, rotation de l'aiguille
    */

    const secondes = now.getSeconds();
    seconde[0].style.transform = "rotate(" + ((secondes / 60) * 360 + 90) + "deg)";

    const minutes = now.getMinutes();
    minute[0].style.transform = "rotate(" + ((minutes / 60) * 360 + 90) + "deg)";

    const heures = now.getHours();
    heure[0].style.transform = "rotate(" + ((heures / 12) * 360 + 90) + "deg)";
    
}

/**
 * setInterval
 * Appel à plusieurs reprises une fonction, avec un délai fixe entre chaque appel
 * https://developer.mozilla.org/en-US/docs/Web/API/setInterval
*/

setInterval(setDate, 1000);
draw();