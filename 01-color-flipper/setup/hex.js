const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// grab button and color span
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add onclick to button to change bg color and color span text
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// generate random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
