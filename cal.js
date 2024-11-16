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
                // Validate input before using eval
                if (/^[0-9+\-*/().\s]+$/.test(display.value)) {
                    display.value = eval(display.value) || "0";
                } else {
                    throw new Error("Invalid Input");
                }
            } catch (error) {
                alert("Invalid Input");
                resetDisplay();
            }
        }