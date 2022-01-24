const array = [];

function pushArray() {
  let push = document.getElementById("array").value;
  array.push(push);
  console.log(array);
}
function init() {
  location.reload();
}
function plusPetit() {
  let Petit = Math.min(...array);
  console.log(Petit);
}
function plusGrand() {
  let Grand = Math.max(...array);
  console.log(Grand);
}
