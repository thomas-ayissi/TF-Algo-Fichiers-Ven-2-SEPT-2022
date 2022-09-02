const taille = prompt("taille?");
const tab = [];
let somme = 0;


for (let index = 0; index < taille; index++) {
    tab.push( parseInt(prompt( "valeur pour l'index " + index )) );
    somme += tab[index];
}

let min = tab[0], max = tab[0];

for (let index = 0; index < tab.length; index++) {
    
    if( min > tab[index]) 
        min = tab[index];

    if( max < tab[index])
        max = tab[index];
    
}

console.log(min, max, tab)