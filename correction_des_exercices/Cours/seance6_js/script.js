let x = 4; //On stocke le chiffre 4 dans x

/*Les comparaisons sont effectuées avant l'affectation. Le JavaScript va donc
 *commencer par comparer et renvoyer true ou false et nous allons stocker ce
 *résultat dans nos variables test*/

let test1 = x == 4;
let test2 = x === 4;
let test3 = x == '4';
let test4 = x === '4';
let test5 = x != '4';
let test6 = x !== '4';
let test7 = x > 4;
let test8 = x >= 4;
let test9 = x < 4;

console.log('Valeur dans x égale à 4 (en valeur) ? : ' + test1 +
    '\nValeur dans x égale à 4 (valeur & type) ? : ' + test2 +
    '\nValeur dans x égale à "4" (en valeur) ? : ' + test3 +
    '\nValeur dans x égale à "4" (valeur & type) ? : ' + test4 +
    '\nValeur dans x différente de "4" (en valeur) ? : ' + test5 +
    '\nValeur dans x différente de "4" (valeur & type) ? : ' + test6 +
    '\nValeur dans x strictement supérieure à 4 ? : ' + test7 +
    '\nValeur dans x supérieure ou égale à 4 ? : ' + test8 +
    '\nValeur dans x strictement inférieure à 4 ? : ' + test9);
