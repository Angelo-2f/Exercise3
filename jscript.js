function validateLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var notif = document.getElementById("notif");

    if(username === "gelo" && password === "1223"){
        notif.innerText = "Login Successfully!";
        setTimeout(function(){
            window.location.href="Calculator.html";
        }, 500)

        return false;
    }else{
        notif.textContent = "Invalid Access!";
    }
}