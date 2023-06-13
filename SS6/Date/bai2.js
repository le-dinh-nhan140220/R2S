function daysUntilEndOfYear() {
    var today = new Date();
    var endOfYear = new Date(today.getFullYear(), 11, 31);

    var remainingTime = endOfYear.getTime() - today.getTime();

    var remainingDays = Math.ceil(remainingTime / (1000 * 3600 * 24));

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Số ngày còn lại đến cuối năm: " + remainingDays + " ngày";
}