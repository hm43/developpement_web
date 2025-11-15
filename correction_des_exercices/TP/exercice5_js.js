let panier = [];


function ajouterFruit(fruit) {
    panier.push(fruit);
}

function retirerFruit(fruit) {
    let index = panier.indexOf(fruit);
    if (index !== -1) {
        panier.splice(index, 1);
    } else {
        console.log("L'element n'existe pas");
    }
}

function afficherPanier() {
    console.log(panier.join(" - "));
}

function compterFruit(fruit) {
    let c = panier.filter(function (v) { return v === fruit; }).length;
    console.log(fruit, " est repete ", c, " fois")
}

ajouterFruit("pomme");
ajouterFruit("banane");
ajouterFruit("pomme");
ajouterFruit("orange");

afficherPanier();

retirerFruit("banane");
afficherPanier();

compterFruit("pomme");
