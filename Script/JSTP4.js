function Submit() {
  let sEmail = document.getElementById("saveEmail").value;
  let sPassword = document.getElementById("savePassword").value;
  console.log(sEmail);
  if (sEmail == "" || sPassword == "") {
    alert("erreur, veuillez réessayer");
  } else {
    alert("Enregistrement reussi");
  }
}
function Login() {
  let sEmail = document.getElementById("saveEmail").value;
  let sPassword = document.getElementById("savePassword").value;
  let Email = document.getElementById("Email").value;
  let Password = document.getElementById("Password").value;
  if (Email == "" || Password == "") {
    alert("Identifiants incorrect!");
  } else {
    if (Email === sEmail && Password === sPassword) {
      alert("Bienvenu dans votre espace client!");
    } else {
      alert("Identifiants incorrect!");
    }
  }
}
