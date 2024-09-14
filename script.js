AOS.init({
  duration: 1500,
  once: true,
});

//SIDEBAR
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
});

//TROCAR TEMA
const theme = document.getElementById("theme");
const root = document.documentElement;

function setDarkTheme() {
  root.style.setProperty("--background", "#2b2b2b");
  root.style.setProperty("--textColor", "#00ffb6");
  root.style.setProperty("--cursor-box-background", "#333");
  root.style.setProperty("--shadow", "#00ffb7a2");
  root.style.setProperty("--shadow2", "rgba(0, 255, 183, 0.67)");
  root.style.setProperty("--stroke", "0px #000")
}

function setLightTheme() {
  root.style.setProperty("--background", "#ddd");
  root.style.setProperty("--textColor", "#333");
  root.style.setProperty("--cursor-box-background", "#f5f5f5");
  root.style.setProperty("--shadow", "#3333333a");
  root.style.setProperty("--shadow2", "#2b2b2b9b");
  root.style.setProperty("--stroke", "1px #000")
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});

theme.addEventListener("click", () => {
  const darkTheme = getComputedStyle(root).getPropertyValue("--background") === "#2b2b2b";

  if (darkTheme) {
    setLightTheme();
    localStorage.setItem("theme", "light");
  } else {
    setDarkTheme();
    localStorage.setItem("theme", "dark");
  }
});


//LIGHTBOX
const images = document.querySelectorAll(".cursor-box img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const body = document.querySelector("body");

images.forEach((e) => {
  e.addEventListener("click", () => {
    const imageUrl = e.getAttribute("src");

    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.style.display === "flex") {
    lightbox.style.display = "none";
  }
});
