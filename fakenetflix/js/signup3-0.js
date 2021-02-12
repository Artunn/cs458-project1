if(checkLoggedIn()) {
    if(getCurrentStage() != 3) {
        window.location = getStageURL();
    }
} else {
    window.location = "index.html";
}