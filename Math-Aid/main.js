var email = "negogogolp@gmail.com";
var password  = "funny@1994";

//Display alert for the email
if(document.getElementById("mainAlert") != null){
    document.getElementById("mainAlert").style.display = "none";
}

//Hide booking links
if(document.getElementById("bookingLink") != null){

    document.getElementById("bookingLink").style.display = "none";
    document.getElementById("bookingSession").style.display = "none";
    document.getElementById("loginAlert").style.display = "none";
    document.getElementById("loginSuccess").style.display = "none";
    document.getElementById("loginOut").style.display = "none";

    if(sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null){
        document.getElementById("login").style.display = "none";
        document.getElementById("bookingSession").style.display = "";
        document.getElementById("loginOut").style.display = "";
    }else{
        document.getElementById("login").style.display = "";
    }
}

function submitEmail(){
    document.getElementById("mainAlert").style.display = "";
}

function login(){
    if(email == document.getElementById("email").value && password == document.getElementById("password").value){
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("password",password);
        window.location.href = "./index.html";

    }else{

        if(document.getElementById("loginAlert") != null){
            document.getElementById("loginAlert").style.display = "";
        }
    }
}

function logOut(){
    sessionStorage.clear();
}

//Login simulation

