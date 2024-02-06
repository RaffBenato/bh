const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

let menuShowing = false;
menu.style.right = "-350px";
menuBtn.addEventListener("click", () => {
  if (menuShowing === false) {
    menu.style.right = "0px";
    menuShowing = true;
  } else {
    menu.style.right = "-350px";
    menuShowing = false;
  }
});
