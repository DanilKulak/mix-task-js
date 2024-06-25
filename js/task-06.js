const inputElement = document.getElementById("validation-input");
const expectedLength = parseInt(inputElement.getAttribute("data-length"));

inputElement.addEventListener("blur", function () {
  const inputValue = inputElement.value;
  const inputLength = inputValue.length;

  if (inputLength === expectedLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
