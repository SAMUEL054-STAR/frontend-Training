const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let value = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let text = button.textContent;

    if (text === "AC") {
      value = "";
      display.textContent = "0";
    } else if (text === "=") {
      value = value.replace("×", "*");
      value = value.replace("÷", "/");
      value = value.replace("−", "-");

      display.textContent = eval(value);
      value = display.textContent;
    } else if (text === "+/-") {
      value = String(Number(value) * -1);
      display.textContent = value;
    } else if (text === "%") {
      value = String(Number(value) / 100);
      display.textContent = value;
    } else {
      value += text;
      display.textContent = value;
    }
  });
});