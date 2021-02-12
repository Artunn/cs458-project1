document.addEventListener('DOMContentLoaded', (event) => {
    // If Logged In, Go to Stage
    if(checkLoggedIn()) {
        window.location = getStageURL();
    }

    let emailForm = document.getElementById("emailForm");
    emailForm.onsubmit = async (e) => {
        e.preventDefault();
        enteredMail = document.getElementById("signupmail").value;
        
        startUser();
        setCurrentUserMail(enteredMail);

        window.location = "signup1-0.html";
    };
})