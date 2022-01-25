function mixage(array, rotation, direction) {
  if (direction === "droite") {
    for (let i = 0; i < rotation; i++) {
      let last = array.pop([array.length - 1]);
      array.unshift(last);
    }
    return array;
  }
  if (direction === "gauche") {
    for (let i = 0; i < rotation; i++) {
      let first = array.shift([0]);
      array.push(first);
    }
    return array;
  }
}

const monTableau = [1, 2, 3, 4];
let maRotation = 2;
let maDirection = "droite";

let resultat = mixage(monTableau, maRotation, maDirection);
console.log(resultat);
