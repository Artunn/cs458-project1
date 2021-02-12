document.addEventListener('DOMContentLoaded', (event) => {
    if(checkLoggedIn()) {
        window.location = getStageURL();
    }
    
    submitForm.onsubmit = async (e) => {
        e.preventDefault();
        enteredMail = document.getElementById("name").value;
        enteredPassword = document.getElementById("password").value;

        if (attemptIn(enteredMail, enteredPassword)) {
            window.location = getStageURL();
        }
    };
});