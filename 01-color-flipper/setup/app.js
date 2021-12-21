const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// select button by id
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// set onclick to change body background and color class div
btn.addEventListener("click", () => {
  // access random index on colors array
  const randomNumber = getRandomNumber();
  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});

// generate random number between 0 and 3
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
