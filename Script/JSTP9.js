function fizzBuzz() {
  let number = document.getElementById("number").value;
  let inc = parseInt(number);
  for (i = 1; i < inc; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}
