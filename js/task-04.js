const valueElement = document.getElementById("value");
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

let counterValue = 0;

function updateCounter() {
  valueElement.textContent = counterValue;
}

decrementButton.addEventListener("click", function () {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", function () {
  counterValue += 1;
  updateCounter();
});

updateCounter();
