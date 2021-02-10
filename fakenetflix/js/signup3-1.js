document.addEventListener('DOMContentLoaded', (event) => {
    checkLoggedIn();

    let expDateElement = document.getElementById("creditcard-expdate");
    let submitForm = document.getElementById("submit");

    expDateElement.addEventListener('input', () => {
        let expLen = expDateElement.value.length;
        if(expLen == 2) {
            expDateElement.value = expDateElement.value + '/';
        }
        if(expLen >= 3) {
            if(!expDateElement.value.includes('/')) {
                expDateElement.value = expDateElement.value.substring(0,2) + '/' + expDateElement.value.substring(2,expLen);
            }
        }
    });

    console.log(submitForm);

    submitForm.onsubmit = async (e) => {
        e.preventDefault();
        console.log("OFFF YAA")
        completeUser();
        alert("ALLAH");
        window.location = "signin.html";
    };
});