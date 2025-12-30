let value = 0.00;
const numberElement = document.getElementById("number");

// Load saved value
const saved = localStorage.getItem("bananaValue");
if (saved) {
    value = parseFloat(saved);
    updateDisplay();
}

function updateDisplay() {
    numberElement.textContent = value.toFixed(2);
}

// Increase every 10 minutes (600,000 ms)
setInterval(() => {
    value += 0.01;
    localStorage.setItem("bananaValue", value);
    updateDisplay();
}, 600000);
