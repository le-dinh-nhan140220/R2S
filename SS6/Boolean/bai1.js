function handlClick() {
    var user = document.getElementById('kiemtra').value
    if (user % 2 == 0) {
        document.getElementById('ketqua').innerHTML = "Số chẵn"
    } else {
        document.getElementById('ketqua').innerHTML = "Số lẻ"
    }
}