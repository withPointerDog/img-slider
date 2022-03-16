const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((sld, ind) => {
  sld.style.left = `${ind * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  dsplNextSlide();
});

prevBtn.addEventListener("click", () => {
  counter--;
  dsplNextSlide();
});

function dsplNextSlide() {
  if (counter >= slides.length) {
    counter = slides.length - 1;
  } else if (counter < 0) {
    counter = 0;
  }
  slides.forEach((sld) => {
    sld.style.transform = `translateX(${counter * -100}%)`;
  });
}
