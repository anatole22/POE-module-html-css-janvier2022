class Studiant {
  constructor(nom, prenom, age, genre, pays, option, cours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.cours = cours;
  }
  changenom(nouveaunom) {
    this.nom = nouveaunom;
  }
  changeprenom(nouveauprenom) {
    this.prenom = nouveauprenom;
  }
  changeoption(nouveauoption) {
    this.option = nouveauoption;
  }
}

const listeEtudiant = [];

let etudianteChinoise = 0;
const prenomA = [];
const allNom = [];
let etudiantRusse = 0;
const femmeK = [];
const hommeM = [];

let nombreEtudiant = prompt("combien y'a t'il d'étudiant ?");
for (let i = 0; i < nombreEtudiant; i++) {
  listeEtudiant.push(
    new Studiant(
      (Studiant.nom = prompt("entrer votre nom")),
      (Studiant.prenom = prompt("entrer votre prénom")),
      (Studiant.age = prompt("entrer votre age")),
      (Studiant.genre = prompt("entrer votre genre")),
      (Studiant.pays = prompt("entrer votre pays")),
      (Studiant.option = prompt("entrer votre option")),
      (Studiant.cours = prompt("entrer votre cour"))
    )
  );
  if (Studiant.genre == "femme" && Studiant.pays == "chine") {
    etudianteChinoise = etudianteChinoise + 1;
  }
  if (Studiant.prenom[Studiant.prenom.length - 1] == "a") {
    prenomA.push(Studiant.prenom);
  }
  if (Studiant.nom != "") {
    allNom.push(Studiant.nom);
  }
  if (Studiant.genre == "homme" && Studiant.pays == "russe") {
    etudiantRusse = etudiantRusse + 1;
  }
  if (Studiant.nom[0] == "k" && Studiant.genre == "femme") {
    femmeK.push(Studiant.nom);
  }
  if (Studiant.genre == "homme" && Studiant.nom[0] == "m") {
    hommeM.push(Studiant.nom);
  }
}

console.log(
  "Le nombre d'étudiante chinoise est de :" + " " + etudianteChinoise
);
console.log(
  "Voici la liste des prénom qui se terminent par a :" + " " + prenomA
);
console.log("Voici la liste de tout les nom :" + " " + allNom);
console.log("Le nombre d'étudiant russe est de :" + " " + etudiantRusse);
console.log(
  "Voici la liste des femme dont le nom commence par k :" + " " + femmeK
);
console.log(
  "Voici la liste des homme dont le nom commence par m :" + " " + hommeM
);
