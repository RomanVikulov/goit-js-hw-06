const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("ul#ingredients");

const elements = ingredients.map((item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  itemEl.classList.add("item");
  return itemEl;
});
listIngredients.append(...elements);
