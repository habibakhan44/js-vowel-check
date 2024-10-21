document.getElementById('compareButton').addEventListener('click', function() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var resultElement = document.getElementById('result');

    if (num1 > num2) {
        resultElement.textContent = `The larger of ${num1} and ${num2} is ${num1}.`;
    } else if (num2 > num1) {
        resultElement.textContent = `The larger of ${num1} and ${num2} is ${num2}.`;
    } else {
        resultElement.textContent = `The values ${num1} and ${num2} are equal.`;
    }
});
