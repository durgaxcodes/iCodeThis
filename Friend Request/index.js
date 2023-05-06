const buttons = document.getElementsByClassName("button");
buttons[0].addEventListener("click", function () {
  buttons[0].innerHTML = "Confirmed";
});
buttons[1].addEventListener("click", function () {
  buttons[1].innerHTML = "Confirmed";
});
buttons[2].addEventListener("click", function () {
  buttons[2].innerHTML = "Confirmed";
});

const person1 = document.getElementsByClassName("profile")[0];
const person2 = document.getElementsByClassName("profile")[1];
const person3 = document.getElementsByClassName("profile")[2];
person1.style.visibility = "hidden";
person2.style.visibility = "hidden";
person3.style.visibility = "hidden";

const fnumber = document.getElementById("f-number");
const view = document.getElementById("view");
view.addEventListener("click", function () {
  document.getElementsByClassName("profile")[0].style.visibility = "visible";
  person2.style.visibility = "visible";
  person3.style.visibility = "visible";
  fnumber.style.visibility = "hidden";
});
