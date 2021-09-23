console.log("I am loading from script.js");
// const popupTrigger = document.getElementById("popup-trigger");
// console.log({ popupTrigger });
const popupClose = document.getElementById("popup-close");
popupClose.addEventListener("click", destroyPopup);

function popmeUp() {
  // let date = new Date();
  //   console.log("You hitted me at " + Date.now());
  const popup = document.getElementById("popup");
  console.log({ popup });
  popup.style.display = "initial";
}

function destroyPopup() {
  const popup = document.getElementById("popup");
  console.log({ popup });
  popup.style.display = "none";
}
