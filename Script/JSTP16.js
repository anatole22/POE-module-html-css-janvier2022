const tailleMatrice = prompt("Entrer la taille de la matrice");
let array = [];
let matrice = [];
let diagonale = 0;
let diagonale2 = 0;
for (let i = 0; i < tailleMatrice; i++) {
  array = [];
  for (let j = 0; j < tailleMatrice; j++) {
    array.push(prompt("définir l'emplacement" + " " + i + " " + j));
    if (i === j) {
      diagonale += parseInt(array[j]);
    }
  }
  matrice.push(array);
}
console.log(matrice);
console.log(diagonale);
