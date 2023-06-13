function checkLeapYear() {
    var yearInput = document.getElementById("year");
    var year = parseInt(yearInput.value);

    var resultElement = document.getElementById("result");

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resultElement.textContent = "True";
    } else {
        resultElement.textContent = "False";
    }
}