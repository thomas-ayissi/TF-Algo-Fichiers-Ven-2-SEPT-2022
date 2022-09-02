const taille = prompt("taille?");
const tab = [];
let somme = 0;


for (let index = 0; index < taille; index++) {
    tab.push( parseInt(prompt( "valeur pour l'index " + index )) );
    somme += tab[index];
}

console.log(tab)
console.log(somme / taille)

