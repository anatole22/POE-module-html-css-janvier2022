const array = [];
let res = 0;
function pushArray() {
  let push = document.getElementById("array").value;
  array.push(push);
  console.log(array);
}
function init() {
  location.reload();
}
function calcul() {
  for (let i = 0; i < array.length; i++) {
    res = res + parseInt(array[i]);
  }
  console.log(res / parseInt(array.length));
}
