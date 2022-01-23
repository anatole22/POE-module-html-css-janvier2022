function categorie() {
  let age = document.getElementById("age").value;
  if (age <= 9 && age >= 7) {
    alert("Vous avez" + " " + age + " " + "ans, votre catégorie est Poussin");
  } else if (age <= 11 && age >= 10) {
    alert("Vous avez" + " " + age + " " + "ans, votre catégorie est Pupille");
  } else if (age <= 13 && age >= 12) {
    alert("Vous avez" + " " + age + " " + "ans, votre catégorie est Benjamin");
  } else if (age <= 15 && age >= 14) {
    alert("Vous avez" + " " + age + " " + "ans, votre catégorie est Minime");
  } else if (age <= 17 && age >= 16) {
    alert("Vous avez" + " " + age + " " + "ans, votre catégorie est Cadet");
  } else {
    alert(
      "Vous avez" +
        " " +
        age +
        " " +
        "ans, vous ne faite pas partie d'une catégorie"
    );
  }
}
