const inputElement = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputElement.value);
  if (!amount) {
    alert("Будь-ласка введіть число.");
    return;
  }
  let initialSize = 30;
  let box = "";

  for (let i = 0; i < amount; i++) {
    box += `<div style="background-color: ${getRandomHexColor()}; width: ${initialSize}px; height: ${initialSize}px;"></div>`;
    initialSize += 10;
  }
  boxesContainer.innerHTML = box;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
