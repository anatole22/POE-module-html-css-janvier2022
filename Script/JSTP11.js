function calcul() {
  let numbermin = document.getElementById("numbermin").value;
  let number1 = document.getElementById("number1").value;
  let numbermax = parseInt(number1);
  let numberdeb = document.getElementById("numberdeb").value;
  let number2 = document.getElementById("number2").value;
  let numberfin = parseInt(number2);

  for (numbermin; numbermin < numbermax + 1; numbermin++) {
    numberdeb = document.getElementById("numberdeb").value;
    for (numberdeb; numberdeb < numberfin + 1; numberdeb++) {
      console.log(
        numbermin +
          " " +
          "x" +
          " " +
          numberdeb +
          " " +
          "=" +
          " " +
          numbermin * numberdeb
      );
    }
  }
}
