document.addEventListener('DOMContentLoaded', (event) => {
    let hideShow = document.getElementById("hideShow");
    let email = document.getElementById("signup-mail");
    let password = document.getElementById("signup-password");

    let currentUserID = getCurrentUserID();
    currentUserID = parseInt(currentUserID);

    if(currentUserID != undefined && currentUserID != null) {
        email.value = getCurrentUserMail();
    }

    submitForm.onsubmit = async (e) => {
        e.preventDefault();
        enteredMail = document.getElementById("signup-mail").value;
        setCurrentUserMail(enteredMail);
        if(setupUser(password.value)) {
            window.location = "signup2-0.html";
        }
    };

    hideShow.addEventListener('click', () => {
        if(hideShow.innerText == "show") {
            hideShow.innerText = "hide";
            password.type = 'text';
        } else {
            hideShow.innerText = "show";
            password.type = 'password';
        }
    });
});