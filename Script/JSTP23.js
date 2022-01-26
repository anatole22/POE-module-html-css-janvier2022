function calcul() {
  let rayon = document.querySelector("#rayon").value;
  if (rayon == "") {
    let erreur = document.querySelector("#erreur");
    erreur.innerHTML = "Le contenu du rayon est vide!";
  } else {
    erreur.innerHTML = "";
    let dia = rayon * 2;
    let diametre = document.querySelector("#diametre");
    diametre.value = dia;
    let cir = dia * 3.14;
    let circonference = document.querySelector("#circonference");
    circonference.value = cir;
    let air = 3.14 * (rayon * rayon);
    let aire = document.querySelector("#aire");
    aire.value = air;
  }
}
