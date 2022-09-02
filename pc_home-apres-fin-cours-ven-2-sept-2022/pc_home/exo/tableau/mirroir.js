const taille = prompt("taille?");
const tab = [];


for (let index = 0; index < taille; index++) {
    tab.push( parseInt(prompt( "valeur pour l'index " + index )) );
}

for (let index = 0; index < tab.length - (tab.length % 2 == 0 ? 0 : 1); index++) {
    const temp = tab[index];
    tab[index] = tab[taille - index - 1];
    tab[taille - index - 1] = temp;
    
}

console.log(tab)