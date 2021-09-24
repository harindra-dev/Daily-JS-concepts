const carousel_items = document.querySelectorAll(".carousel_wrapper .carousel .__content .corousel__item");
const prev = document.getElementById("b1");
const next = document.getElementById("b2");
console.log({ carousel_items, prev, next });

let currentItem = 0;

function setCarousel() {
  for (let i = 0; i < carousel_items.length; i++) {
    if (i !== currentItem) {
      carousel_items[i].style.display = "none";
    } else {
      carousel_items[i].style.display = "block";
    }
  }
}

setCarousel();

next.addEventListener("click", function () {
  if (carousel_items.length - 1 == currentItem) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  setCarousel();
});

prev.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = carousel_items.length - 1;
  }
  setCarousel();
});
