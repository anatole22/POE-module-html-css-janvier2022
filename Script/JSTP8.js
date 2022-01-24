function increment() {
  let number = document.getElementById("number").value;
  let inc = parseInt(number);
  let max = inc + 11;
  for (inc = inc + 1; inc < max; inc++) {
    console.log(inc);
  }
}
