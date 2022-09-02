const taille = prompt("taille?");
const tab = [];
let somme = 0;


for (let index = 0; index < taille; index++) {
    tab.push( parseInt(prompt( "valeur pour l'index " + index )) );
    somme += tab[index];
}


for (let i = 0; i < tab.length - 1; i++) {
    
    for (let j = i+1; j < tab.length; j++) {
        if( tab[i] > tab[j] ){
            const temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
        }
    }

}

console.log(tab)