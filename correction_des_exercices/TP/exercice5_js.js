let panier = [];

function ajouterFruit(fruit) {
    panier.push(fruit)
}
function retirerFruit(fruit) {
    const index = panier.indexOf(fruit);
    if (index !== -1) {
        panier.splice(index, 1)
    } else {
        console.log("L'element n'existe pas")
    }
}
function afficherPanier() {
    console.log(panier.join(", "))
}
function compterFruit(fruit) {
    const resultat = panier.filter(function (v) { return v === fruit });
    console.log(resultat.length);
}
ajouterFruit("pomme")
ajouterFruit("banane")
ajouterFruit("pomme")
ajouterFruit("orange")
retirerFruit("orange")
afficherPanier()
compterFruit("pomme")