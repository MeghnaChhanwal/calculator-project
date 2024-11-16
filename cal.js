function appendValue(value) {
    const display = document.getElementById("result");
    if (display.value === "0") {
        display.value = value; 
    } else {
        display.value += value; 
    }
}

function deleteValue() {
    const display = document.getElementById("result");
    display.value = display.value.slice(0, -1) || "0";
}

function resetDisplay() {
    document.getElementById("result").value = "0"; 
}
function calculateResult() {
    const display = document.getElementById("result");
    try {
        display.value = eval(display.value) || "0"; 
    } catch (error) {
        alert("Invalid Input");
        resetDisplay();
    }
}

