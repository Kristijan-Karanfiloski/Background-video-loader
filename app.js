const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");

const fontAwsome = document.querySelector(".fa-solid");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fontAwsome.classList.add("fa-pause");
    fontAwsome.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fontAwsome.classList.remove("fa-pause");
    fontAwsome.classList.add("fa-play");
  }
});

window.addEventListener("load", () => {
  preloader.style.zIndex = "-2";
});
