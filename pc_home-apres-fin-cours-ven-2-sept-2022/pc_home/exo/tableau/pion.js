const PION = '*';
const VIDE = '_';

const cmdG = 'g';
const cmdD = 'd';
const cmdQ = 'q';

const plateau = [PION, VIDE, VIDE, VIDE, VIDE];
const lastIndex = plateau.length-1;
let position = 0;


let cmd;

do{

    console.log(plateau)
    cmd = prompt('votre commande ? (g_auche, d_roite, q_uitter)');

    switch(cmd) {
        case cmdG:

            if( position === 0 ){
                plateau[lastIndex] = PION;
                plateau[0] = VIDE;
                position = lastIndex;
            }
            else{ // 2
                plateau[position--] = VIDE;
                plateau[position] = PION;
            }

            break;

        case cmdD:
            if(position === lastIndex){
                plateau[0] = PION;
                plateau[lastIndex] = VIDE;
                position = 0;
            }
            else {
                plateau[position++] = VIDE;
                plateau[position] = PION
            }

            break;

        case cmdQ:
            console.log('au revoir')
            break;

        default:
            console.log('invalide')
    }

}while(cmd != cmdQ);
