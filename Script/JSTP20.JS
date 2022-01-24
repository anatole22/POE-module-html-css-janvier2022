function mixage(array, rotation, direction) {
  if (direction === "droite") {
    for (let i = 0; i < rotation; i++) {
      let last = array[array.length - 1];
      array.pop();
      array.unshift(last);
    }
    return array;
  }
  if (direction === "gauche") {
    for (let i = 0; i < rotation; i++) {
      let first = array[0];
      array.shift();
      array.push(first);
    }
    return array;
  }
}

const monTableau = [1, 2, 3, 4];
let maRotation = 3;
let maDirection = "droite";

let resultat = mixage(monTableau, maRotation, maDirection);
console.log(resultat);
