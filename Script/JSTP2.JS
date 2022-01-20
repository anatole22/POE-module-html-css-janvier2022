function calcul() {
  let distance = document.getElementById("distance").value;
  let temps = document.getElementById("temps").value;
  const vitesse = distance / temps;
  alert(vitesse + " " + "m/s");
}
