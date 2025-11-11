// 1
var a;
console.log(typeof a, "1. var a;typeof a; -> 'undefined' : Déclaration sans valeur, le type est undefined.");

// 2
var s = '1s';
s++;
console.log(s, "2. var s = '1s';s++; -> NaN : Incrémentation impossible sur une chaîne, résultat NaN.");

// 3
console.log(!!"false", '3. !!"false" -> true : Toute chaîne non vide est considérée comme vraie.');

// 4
console.log(!!undefined, "4. !!undefined -> false : undefined est falsy, donc !!undefined donne false.");

// 5
console.log(typeof -Infinity, "5. typeof -Infinity -> 'number' : -Infinity est un nombre spécial en JS, type number.");

// 6
console.log(10 % "0", '6. 10 % "0" -> NaN : Division par zéro (opération modulo) retourne NaN.');

// 7
console.log(undefined == null, "7. undefined == null -> true : En égalité faible (==), undefined et null sont équivalents.");

// 8
console.log(false === "", '8. false === "" -> false : Les types diffèrent (booléen vs chaîne), donc === retourne false.');

// 9
console.log(typeof "2E+2", "9. typeof \"2E+2\" -> 'string' : Même si cela ressemble à un nombre, c'est une chaîne.");

// 10
a = 3e+3;
a++;
console.log(a, "10. a = 3e+3;a++; -> 3001 : 3e+3 = 3000, a++ incrémente a à 3001.");
