function check() {
  let number = document.getElementById("number").value;
  if (number <= 3 && number >= 1) {
    alert("bonne réponse");
  } else {
    alert("mauvaise réponse");
  }
}
