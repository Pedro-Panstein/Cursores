AOS.init({
  duration: 1500,
  once: true,
});

//SIDEBAR
const overflow = document.documentElement;
const menu1 = document.querySelector(".menu-line1");
const menu2 = document.querySelector(".menu-line2");
const menu3 = document.querySelector(".menu-line3");
const menuContent = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const background = document.querySelector(".active-sidebar");

menuContent.addEventListener("click", () => {
  menu1.classList.toggle("effect1");
  menu2.classList.toggle("effect2");
  menu3.classList.toggle("effect3");
  sidebar.classList.toggle("hidden");
  background.classList.toggle("hidden");
  if (overflow.style.overflowY === "hidden") {
    overflow.style.overflowY = "";
  } else {
    overflow.style.overflowY = "hidden";
  }
});

//LIGHTBOX

const images = document.querySelectorAll(".cursor-box img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close")

images.forEach((e) => {
  e.addEventListener("click", () => {
    const imageUrl = e.getAttribute("src")
    
    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex"
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none"
})