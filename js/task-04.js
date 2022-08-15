const conter = document.querySelector("#counter");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  return (document.querySelector("#value").textContent = counterValue);
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  return (document.querySelector("#value").textContent = counterValue);
});
