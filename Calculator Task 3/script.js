const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    updateInput(value);
  });
});

equals.addEventListener("click", () => {
  calculate();
});

clear.addEventListener("click", () => {
  resetCalculator();
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
    updateInput(key);
  }
  else if (key === "Enter" || key === "=") {
    e.preventDefault();
    calculate();
  }
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || "0";
  }
  else if (key.toLowerCase() === "c") {
    resetCalculator();
  }
});

function updateInput(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  display.textContent = currentInput;
}

function resetCalculator() {
  currentInput = "";
  display.textContent = "0";
}
