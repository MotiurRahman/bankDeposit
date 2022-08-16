

document.getElementById("deposit").addEventListener('click', function () {

    const depositAmount = document.getElementById("depositAmount").value;
    const depositCurValue = document.getElementById("depositCurValue").innerText;
    const totalAmount = document.getElementById("totalAmount").innerText;

    console.log(depositAmount, depositCurValue);

    document.getElementById("depositCurValue").innerText = parseInt(depositCurValue) + parseInt(depositAmount);
    document.getElementById("totalAmount").innerText = parseInt(totalAmount) + parseInt(depositAmount);

});

document.getElementById("withdraw").addEventListener('click', function () {

    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const totalWithdraw = document.getElementById("totalWithdraw").innerText;
    const totalAmount = document.getElementById("totalAmount").innerText;

    document.getElementById("totalWithdraw").innerText = parseInt(totalWithdraw) + parseInt(withdrawAmount);
    document.getElementById("totalAmount").innerText = parseInt(totalAmount) - parseInt(withdrawAmount);

});


