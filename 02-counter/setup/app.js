// set initial counter variable
let counter = 0;

// select value span and btns
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// iterate over btns using forEach and add event listener
btns.forEach((b) => {
  b.addEventListener("click", (e) => {
    // get the classList of each btn and check which btn your currently selecting
    const styles = e.currentTarget.classList;
    // add logic depending on dec/inc/reset
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    // add logic to change color <0/0/>0
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }

    // change value to be counter
    value.textContent = counter;
  });
});
