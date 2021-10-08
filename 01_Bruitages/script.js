function playSound(element) {

    /**
     * --------------------
     * querySelector
     * Retourne le premier élément dans le document correspondant au sélecteur spécifié
     * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
     * --------------------
     * keyCode 
     * Code clé correspondant à une touche du clavier
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     * --------------------
     * const audio 
     * Contient la balise <audio> où la valeur de data-key est égale au code clé de la touche du clavier pressée
     * --------------------
     * const key 
     * Contient la <div class="key"> où la valeur de data-key est égale au code clé de la touche du clavier pressée
     * --------------------
    */

    const audio = document.querySelector(`audio[data-key="${element.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${element.keyCode}"]`);

    /**
     * Si le code clé de la touche du clavier pressée ne correspond à aucune valeur de data-key, on stop la fonction 
    */

    if(!audio) {
        return;
    }

    /**
     * --------------------
     * currentTime
     * Remet à 0 le son 
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
     * --------------------
     * play()
     * Joue le son
     * --------------------
    */

    audio.currentTime = 0;
    audio.play();

    /**
     * classList.add()
     * Ajoute la classe 'playing' à la <div> active
     * https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    */

    key.classList.add('playing');
}


function removeTransition(element) {

    /**
     * --------------------
     * propertyName
     * Contient le nom de la propriété CSS associée à la transition (ici "transform") - cf style.css
     * https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/propertyName
     * --------------------
     * Si l'élément n'a pas la propriété CSS "transform", on skip la transition
     * --------------------
    */

    if(element.propertyName !== "transform") {
        return;
    }

    /**
     * Si l'élément a une classe 'playing', alors on l'enlève
    */

    if(this.classList.contains('playing')) {
        this.classList.remove('playing');
    }
}

/**
 * --------------------
 * querySelectorAll
 * Renvoie la liste des éléments du document qui correspondent au sélecteur spécifié (ici la classe key)
 * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
 * --------------------
*/

const keys = document.querySelectorAll('.key');

/**
 * --------------------
 * addEventListener
 * Méthode qui attache une fonction à appeler chaque fois que l'événement spécifié est envoyé à la cible 
 * https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
 * --------------------
 * transitionend 
 * Evénement déclenché quand une transition CSS est terminée
 * https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/transitionend_event
*/

keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
})

/**
 * Ou écrit comme ça :
 * keys.forEach(key => key.addEventListener('transitionend', removeTransition));
*/

/**
 * --------------------
 * keydown
 * Evénement keydown déclenché lorsqu'une touche est enfoncée
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
 * --------------------
 */

window.addEventListener('keydown', playSound);
