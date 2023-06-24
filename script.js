let string = "";
let input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
const arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedVal = e.target.innerHTML;
    if (clickedVal === "=") {
      string = eval(string);
    } else if (clickedVal === "C") {
      string = "";
    } else if (clickedVal === "X") {
      string = string + "*";
    } else if (clickedVal === "÷") {
      string = string + "/";
    } else if (clickedVal === "DEL") {
      string = string.substring(0, string.length - 1);
    } else {
      string = string + clickedVal;
    }
    input.value = string;
  });
});
