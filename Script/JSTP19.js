function matrice(matrice) {
  let array = [];
  let matrice2 = [];
  let diagonale = 0;
  let diagonale2 = 0;
  let res = 0;
  for (let i = 0; i < matrice.length; i++) {
    array = [];
    for (let j = 0; j < matrice.length; j++) {
      array.push(matrice[i][j]);
      if (i === j) {
        diagonale += parseInt(array[j]);
      }
      if (j === matrice.length - (1 + i)) {
        diagonale2 += parseInt(array[j]);
      }
    }
    matrice2.push(array);
  }
  res = diagonale + diagonale2;
  console.log(diagonale);
  console.log(diagonale2);
  return res;
}

let maMatrice = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
console.log(matrice(maMatrice));
