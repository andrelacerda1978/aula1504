function converterCelsiusParaFahrenheit() {
    var temp = parseFloat(document.getElementById("temp").value);
    if (isNaN(temp)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido para a temperatura.";
        return;
    }
    var fahrenheit = (temp * 9/5) + 32;
    document.getElementById("resultado").innerText = `${temp}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}

function converterFahrenheitParaCelsius() {
    var temp = parseFloat(document.getElementById("temp").value);
    if (isNaN(temp)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido para a temperatura.";
        return;
    }
    var celsius = (temp - 32) * 5/9;
    document.getElementById("resultado").innerText = `${temp}°F é igual a ${celsius.toFixed(2)}°C`;
}
