const rangeRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

rangeRef.addEventListener("input", onValueInput);

function onValueInput(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
