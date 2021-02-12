function attemptIn(email, password) {
    for( let idCounter = 0; idCounter < getUserCount(); idCounter++) {
        let currentMail = localStorage.getItem('fFlixUM-' + idCounter);
        if(currentMail == email) {
            let currentPassword = localStorage.getItem('fFlixUP-' + idCounter);
            if(currentPassword == password) {
                localStorage.setItem('fFlixCU', idCounter);
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

function getCurrentUserID() {
    let curID = localStorage.getItem('fFlixCU');
    if(curID) {
        return curID;
    } else {
        return null;
    }
}

function getCurrentUserMail() {
    let curMail = localStorage.getItem('fFlixUM-' + getCurrentUserID());
    if(curMail) {
        return curMail;
    } else {
        return null;
    }
}

function setCurrentUserMail(email) {
    // EXTRA CHECK IF NECESSARY
    localStorage.setItem('fFlixUM-' + getCurrentUserID(), email);
}

function mailExists() {
    let email = getCurrentUserMail();

    for( let idCounter = 0; idCounter < getUserCount(); idCounter++) {
        let currentMail = localStorage.getItem('fFlixUM-' + idCounter);
        if(currentMail == email) {
            return true;
        }
    }
    return false;
}

function startUser() {
    localStorage.setItem('fFlixCU', getUserCount());
    localStorage.setItem('fFlixUS-' + getUserCount(), 1);
}

function setupUser(password) {
    if(mailExists()) {
        alert("THIS MAIL IS ALREADY REGISTERED");
        return false;
    } else {
        if(localStorage.getItem('fFlixUM-' + getCurrentUserID())) {
            localStorage.setItem('fFlixUP-' + getCurrentUserID(), password);
            localStorage.setItem('fFlixCU', getUserCount());
            localStorage.setItem('fFlixUC', getUserCount() + 1);
            setStage(2);
        }
    }
    return true;
}

function completeUser() {
    localStorage.setItem('fFlixUS-' + getCurrentUserID(), 4);
}

function getCurrentStage() {
    let currentStage = localStorage.getItem('fFlixUS-' + getCurrentUserID());
    if(localStorage.getItem('fFlixUS-' + getCurrentUserID())) {
        return parseInt(currentStage);
    } else {
        return null;
    }
}

function setStage(stageCount) {
    localStorage.setItem('fFlixUS-' + getCurrentUserID(), stageCount);
}

function getUserCount() {
    let count = localStorage.getItem('fFlixUC');
    if(count) {
        return parseInt(count);
    } else {
        localStorage.setItem('fFlixUC', 0);
        return 0;
    }
}

function setUserPlan(planCount) {
    if(getCurrentUserID()) {
        localStorage.setItem('fFlixUPlan-' + getCurrentUserID(), planCount);
    }
}

function checkLoggedIn() {
    if (getCurrentUserID() == null || getCurrentStage() == 1) {
        return false;
    }
    return true;
}

function getStageURL() {
    if(getCurrentStage() == 4) {
        return "signedin.html";
    } else if(getCurrentStage()) {
        return "signup" + getCurrentStage() + "-0.html";
    } else {
        return "";
    }
}

function logout() {
    localStorage.removeItem('fFlixCU');
    window.location = 'index.html';
}