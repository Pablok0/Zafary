function valida() {
    var pablo = "pablo@gmail.com";
    var passpablo = "123";
    var usuario = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    if (usuario == '') {
        alert("user cannot be empty");
        return false;
    }
    if (password == '') {
        alert("the password cannot be empty");
        return false;
    }
    if (usuario != pablo || password != passpablo) {
        alert("username or password does not apply");
        return false;
    }

    alert("Correct");
}

