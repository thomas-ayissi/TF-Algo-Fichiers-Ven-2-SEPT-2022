const taille = prompt("taille?");
const tab = [];
let somme = 0;


for (let index = 0; index < taille; index++) {
    tab.push( parseInt(prompt( "valeur pour l'index " + index )) );
    somme += tab[index];
}

let position = -1;
const toFind = prompt("to find?")

for (let index = 0; index < tab.length && position != -1; index++) {
    
    if(tab[index] == toFind)
        position = index;
    
}

console.log(tab);
console.log( position != -1 ? position : 'inexistant' );