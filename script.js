const menu = document.getElementById("menu");
const links = document.querySelector(".links");
const nav = document.getElementsByTagName("nav")[0];

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 700) {
//     nav.classList.add("fixed");
//   } else {
//     nav.classList.remove("fixed");
//   }
// });
