function Sign(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username == null || password == " " || email == " ") {
        alert("Username cannot be empty!");
        return false;
    }
    
    if( password == null || password == " " || password.length < 8) {
        alert("Password cannot be empty! Please input 8 characters!");
        return false
    }
}


