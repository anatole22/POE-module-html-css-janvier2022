const arrayListe1 = [];
const arrayListe2 = [];
let arrayTotal = [];

function calcul() {
  let a = document.getElementById("1-1").value;
  let b = document.getElementById("1-2").value;
  let c = document.getElementById("1-3").value;
  let d = document.getElementById("1-4").value;
  arrayListe1.push(a, b, c, d);
  let e = document.getElementById("2-1").value;
  let f = document.getElementById("2-2").value;
  let g = document.getElementById("2-3").value;
  let h = document.getElementById("2-4").value;
  arrayListe2.push(e, f, g, h);

  for (let i = 0; i < arrayListe1.length; i++) {
    arrayTotal = parseInt(arrayListe1[i]) + parseInt(arrayListe2[i]);
    console.log(arrayTotal);
  }
}
