const buttons = document.querySelectorAll("button");

function getData(index) {
  fetch(`/api/${index}/`)
    .then(e => e.json())
    .then(data => {
      const img = document.querySelector("img");
      const city = document.querySelector("h3");
      const cityTemp = document.querySelector("p");

      img.src = data.img;
      city.innerHTML = data.city;
      cityTemp.innerHTML = data.temp;
    });
}

buttons[0].addEventListener("click", () => {
  getData(0);
});

buttons[1].addEventListener("click", () => {
  getData(1);
});

buttons[2].addEventListener("click", () => {
  getData(2);
});
