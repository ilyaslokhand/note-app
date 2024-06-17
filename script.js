const notescontinor = document.querySelector(".notes-containor");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputbox");

createbtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.classList = "inputbox";
  inputbox.setAttribute("Contenteditable", "true");
  img.src = "delete.png";
  notescontinor.appendChild(inputbox).appendChild(img);
});

notescontinor.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});
