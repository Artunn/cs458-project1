"use strict";

document.addEventListener('DOMContentLoaded', (event) => {
    let hideShow = document.getElementById("hideShow");

    if(checkLoggedIn()) {
        window.location = getStageURL();
    }
    
    submitForm.onsubmit = async (e) => {
        e.preventDefault();
        let enteredMail = document.getElementById("name").value;
        let enteredPassword = document.getElementById("password").value;

        let attemptResult = attemptIn(enteredMail, enteredPassword);
        if (attemptResult === 0) {
            window.location = getStageURL();
        } else if(attemptResult === 1) {
            let errorDiv = document.getElementById("errorText");
            errorDiv.innerHTML = "<p><b>Incorrect password.</b> Please try again or you can <a href='signinHelp.html'>reset your password.</a></p>";
        } else {
            let errorDiv = document.getElementById("errorText");
            errorDiv.innerHTML = "<p>Sorry, we can't find an account with this email address. Please try again or <a href='index.html'>create a new account.</a></p>";
        }
    };

    hideShow.addEventListener('click', () => {
        if(hideShow.innerText == "SHOW") {
            hideShow.innerText = "HIDE";
            password.type = 'text';
        } else {
            hideShow.innerText = "SHOW";
            password.type = 'password';
        }
    });
});