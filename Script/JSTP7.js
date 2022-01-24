function check() {
  let number = document.getElementById("number").value;
  if (number <= 20 && number >= 10) {
    alert("bonne réponse");
  } else if (number < 10) {
    alert("Trop petit");
  } else {
    alert("trop grand");
  }
}
