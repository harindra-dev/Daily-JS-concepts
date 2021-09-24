var allowOnlyOneAccordion = true;
const accordionTogglers = document.querySelectorAll(".accordion-toggler");
console.log(accordionTogglers);
for (let i = 0; i < accordionTogglers.length; i++) {
  accordionTogglers[i].addEventListener("click", function () {
    if (allowOnlyOneAccordion) {
      for (let x = 0; x < accordionTogglers.length; x++) {
        accordionTogglers[x].classList.remove("open");
      }
    }
    accordionTogglers[i].classList.toggle("open");
  });
}

// Step 1: Referring to all accordions
// Step 2: Adding event listeners to all accordins in the list

// [ el1, el2, el3 ] , length = 3, iMax = 2; 0, 1, 2

// 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

// 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

//  git clone https://harindra-dev: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@github.com/harindra-dev/Daily-JS-concepts.git
