const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const addButton = document.getElementById("addButton");
const result = document.getElementById("result");

addButton.addEventListener("click", function () {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    const sum = value1 + value2;

    result.textContent = "Result: " + sum;
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}