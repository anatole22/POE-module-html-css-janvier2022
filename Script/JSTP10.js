function calcul() {
  let number = document.getElementById("number").value;
  let inc = parseInt(number);
  for (i = 1; i < 11; i++) {
    console.log(inc + " " + "x" + " " + i + " " + "=" + " " + inc * i);
  }
}
