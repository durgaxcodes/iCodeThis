// Add JavaScript code here
const visible = document.querySelector(".visible");
const invisible = document.querySelector(".invisible");
const input = document.querySelector("#pwd");
const resetbtn = document.querySelector(".reset");
visible.addEventListener("click", function () {
  visible.style.visibility = "hidden";
  invisible.style.visibility = "visible";
  input.type = "text";
});

invisible.addEventListener("click", visibility);

resetbtn.addEventListener("click", function () {
  input.value = "";
  visibility();
});

function visibility() {
  visible.style.visibility = "visible";
  invisible.style.visibility = "hidden";
  input.type = "password";
}
