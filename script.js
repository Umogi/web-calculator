document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (!isNaN(value) || value === ".") {
                // Numbers & decimal point
                currentInput += value;
                screen.textContent = currentInput;
            } else if (value === "C") {
                // Clear everything
                currentInput = "";
                previousInput = "";
                operator = "";
                screen.textContent = "0";
            } else if (value === "<-") {
                // Backspace (remove last character)
                currentInput = currentInput.slice(0, -1);
                screen.textContent = currentInput || "0";
            } else if (value === "=") {
                // Calculate the result
                if (previousInput && operator && currentInput) {
                    currentInput = eval(previousInput + operator + currentInput);
                    screen.textContent = currentInput;
                    previousInput = "";
                    operator = "";
                }
            } else {
                // Operators (+, -, *, /)
                if (currentInput !== "") {
                    previousInput = currentInput;
                    operator = value === "x" ? "*" : value; // Replace "x" with "*"
                    currentInput = "";
                }
            }
        });
    });
});
