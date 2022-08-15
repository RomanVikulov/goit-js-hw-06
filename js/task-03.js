const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGalleryEl = document.querySelector(".gallery");
console.log(listGalleryEl);

const imgEl = images
  .map((img) => `<li><img src="${img.url}" alt="${img.alt}"></li>`)
  .join("");

listGalleryEl.insertAdjacentHTML("beforeend", imgEl);
console.log(imgEl);

const img = document.querySelectorAll("img");
img.forEach((img) => {
  img.style.display = "block";
  img.style.maxWidth = "50%";
  img.style.height = "auto";
  console.log(img);
});

listGalleryEl.style.listStyle = "none";
listGalleryEl.style.display = "flex";
listGalleryEl.style.flexWrap = "wrap";
listGalleryEl.style.justifyContent = "center";
listGalleryEl.style.gap = "15px";
