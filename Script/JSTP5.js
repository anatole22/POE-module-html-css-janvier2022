const sEmail = prompt("Enregister votre email :");
const sPassword = prompt("Enregistrer votre mot de passe :");
let essai = 0;

if (sEmail != "" && sPassword != "") {
  alert("Enregistrement reussi");
} else {
  alert("erreur, veuillez réessayer");
  location.reload();
}

function Login() {
  let Email = document.getElementById("Email").value;
  let Password = document.getElementById("Password").value;
  if (essai != 5) {
    if (Email == "" || Password == "") {
      alert("Identifiants incorrect!");
    } else {
      if (Email === sEmail && Password === sPassword) {
        alert("Bienvenu dans votre espace client!");
        reload.location();
      } else {
        essai = essai + 1;
        console.log(essai);
        alert("Identifiants incorrect!");
      }
    }
  } else {
    alert(
      "Vous avez saisi des mauvais identifiants 5 fois, votre compte est bloqué"
    );
  }
}
