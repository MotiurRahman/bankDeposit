document.getElementById('btnSubmit').addEventListener('click', function () {
    const userEmail = document.getElementById("userEmail").value;
    const password = document.getElementById("userPass").value;
    if (userEmail != "" && password != "") {

        if (userEmail == "m@gmail.com" && password == "admin") {
            window.location.href = "bank.html";
        } else {
            alert("Invalid user");
        }

    } else {
        alert("Fillup fileds");
    }

});