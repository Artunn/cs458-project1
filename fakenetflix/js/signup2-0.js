if(checkLoggedIn()) {
    if(getCurrentStage() == 4) {
        window.location = getStageURL();
    }
} else {
    window.location = "index.html";
}