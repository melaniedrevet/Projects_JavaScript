/**
 * --------------------
 * querySelectorAll
 * Renvoie la liste des éléments du document qui correspondent au sélecteur spécifié 
 * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
 * --------------------
*/

const inputs = document.querySelectorAll('input');

function mettreAJour() {

    /**
     * --------------------
     * dataset
     * Permet d'accéder aux attributs de données "data-" sur les éléments 
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
     * --------------------
    */

     const suffix = this.dataset.sizing || ''; 

    /**
     * --------------------
     * stye.setProperty(propertyName, value)
     * Définit une nouvelle valeur pour une propriété sur un objet de déclaration de style CSS
     * https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
     * --------------------
     * this.name : nom de la propriété css
     * this.value + suffix : valeur + unité de mesure
     * --------------------
    */

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

/**
 * --------------------
 * change
 * Déclenché pour les éléments lorsqu'un changement de leur valeur est réalisé par l'utilisateur 
 * https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/change_event
 * --------------------
 * mouseover
 * Déclenché lorsqu'un dispositif de pointage déplace le curseur sur l'élément
 * https://developer.mozilla.org/fr/docs/Web/API/Element/mouseover_event
 * --------------------
 */

inputs.forEach(input => input.addEventListener('change', mettreAJour));
inputs.forEach(input => input.addEventListener('mouseover', mettreAJour));