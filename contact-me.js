
var formSubmit = document.querySelector("#Submit");

var nameErr = document.getElementById("nameErr");
var emailErr = document.getElementById("emailErr");
var msgErr = document.getElementById("msgErr");

formSubmit.addEventListener("click", function(event){
    event.preventDefault();

    var formName = document.getElementById("name").value;
    var formEmail = document.getElementById("email").value;
    var formMessage = document.getElementById("message").value;

    
    if(formName === ""){
        nameErr.style.display = "block";
    }

    if(formEmail === ""){
        emailErr.style.display = "block";
    }
    
    if(formMessage === ""){
        msgErr.style.display = "block";
    }
    
    if(!isNaN(formName) || !formEmail.includes("@")){
        if(!isNaN(formName)){
            nameErr.style.display = "block";
            nameErr.innerHTML = "Invalid Name! Please use letters only";
        }
        if(!formEmail.includes("@")){
            emailErr.style.display = "block";
            emailErr.innerHTML = "Invalid Email! Please provide an actual email";
        }
    }
    else {
        alert("Form submitted successfully");
    }
});
