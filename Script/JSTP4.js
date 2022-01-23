const sEmail = prompt("Enregister votre email :");
const sPassword = prompt("Enregistrer votre mot de passe :");

if (sEmail == "" || sPassword == "") {
  alert("erreur, veuillez réessayer");
  location.reload();
} else {
  alert("Enregistrement reussi");
}

function Login() {
  let Email = document.getElementById("Email").value;
  let Password = document.getElementById("Password").value;
  if (Email == "" || Password == "") {
    alert("Identifiants incorrect!");
  } else {
    if (Email === sEmail && Password === sPassword) {
      alert("Bienvenu dans votre espace client!");
      location.reload();
    } else {
      alert("Identifiants incorrect!");
    }
  }
}
