document.addEventListener('DOMContentLoaded', (event) => {
    if(checkLoggedIn()) {
        window.location = getStageURL();
    }
    
    document.getElementById("nextPageButton").addEventListener("click", () => {
        window.location = "signup1-1.html";
    })
})