// Add JavaScript code here
let i = 0;
let txt = "Merry Christmas!";
let speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let content1 = document.getElementById("content-1");
content1.style.visibility = "hidden";
let content2 = document.getElementById("content-2");
let content3 = document.getElementById("content-3");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", function () {
  content1.style.visibility = "visible";
  content2.style.visibility = "hidden";
  setTimeout(typeWriter, 1000);
});

let btnclose = document.getElementById("close-modal");
btnclose.addEventListener("click", function () {
  content1.style.visibility = "hidden";
  content2.style.visibility = "visible";
});

let btn3 = document.getElementById("close-n");
btn3.addEventListener("click", function () {
  content1.style.visibility = "hidden";
  content2.style.visibility = "visible";
  content3.style.visibility = "hidden";
});

btn.addEventListener("click", function () {
  content1.style.visibility = "hidden";
  content2.style.visibility = "hidden";
  content3.style.visibility = "visible";
});
