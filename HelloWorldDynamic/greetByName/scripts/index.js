"use strict";
window.onload = init;
function init() {
  const greetBtnEl = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
  const nameField = document.getElementById("nameField");
  const userName = nameField.value;
  alert(`Hello , ${userName}!`);
}
