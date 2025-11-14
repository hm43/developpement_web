let panier = [];

function ajouterFruit(fruit) {
    panier.push(fruit);
}
function retirerFruit(fruit) {
    const index = panier.indexOf(fruit);
    if (index !== -1) {
        panier.splice(index, 1);

    } else {
        console.log("L'element introuvable");
    }
}
function afficherPanier() {
    console.log(panier.join(', '));
}


function compterFruit(fruit) {
    let c = 0;
    panier.forEach(function (v, i) {
        if (v === fruit) {
            c++;
        }
    });
    console.log(c);
}

ajouterFruit("Pomme")
ajouterFruit("Banane")
ajouterFruit("Pomme")
ajouterFruit("Orange")
afficherPanier();

retirerFruit("Banane")

afficherPanier();
compterFruit("Pomme");