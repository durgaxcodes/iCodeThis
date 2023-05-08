// Add JavaScript code here
let hidden = document.getElementById("content");
hidden.style.visibility = "hidden";
let openModalbutton = document.getElementById("btn-2");
let closeModal = document.getElementById("btn-1");
const modal = document.getElementById("modal");
openModalbutton.addEventListener("click", openModal);

closeModal.addEventListener("click", function () {
  hidden.style.visibility = "hidden";
  modal.style.visibility = "visible";
});

function openModal() {
  hidden.style.visibility = "visible";
  modal.style.visibility = "hidden";
}
