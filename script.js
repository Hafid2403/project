function Sign() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == null || username == " ") {
        alert("username cannot be empty");
        return false;
    }
    if( password == null || password == " " || password.length < 8) {
        alert("password cannot be empty , and please input 8 characters");
        return false
    }
}