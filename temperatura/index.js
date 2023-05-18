function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    let outputValue;

    if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        outputValue = (inputValue * 9 / 5) + 32;
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        outputValue = inputValue + 273.15;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        outputValue = (inputValue - 32) * 5 / 9;
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        outputValue = (inputValue + 459.67) * 5 / 9;
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        outputValue = inputValue - 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        outputValue = (inputValue * 9 / 5) - 459.67;
    } else if (inputUnit === outputUnit) {
        outputValue = inputValue;
    } else {
        alert("Unidades de temperatura inválidas.");
        return;
    }

    document.getElementById("outputValue").value = outputValue.toFixed(2);
}