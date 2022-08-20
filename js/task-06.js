const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.dataset.length;

inputRef.addEventListener("blur", onInputLengthValue);

function onInputLengthValue(event) {
  if (event.target.value.length === +inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
