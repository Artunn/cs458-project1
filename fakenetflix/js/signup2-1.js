var selected = 2;
setUserPlan(2);

document.addEventListener('DOMContentLoaded', (event) => {
    checkLoggedIn();

    let basicPlanElements = document.getElementsByClassName('basic');
    let standarPlanElements = document.getElementsByClassName('standard');
    let premiumPlanElements = document.getElementsByClassName('premium');

    let basicPlanHeader = document.getElementById('basic-header');
    let standardPlanHeader = document.getElementById('standard-header');
    let premiumPlanHeader = document.getElementById('premium-header');

    let continueButton = document.getElementById('continue');

    changeBackgroundColor(premiumPlanHeader,'#e50914');
    changeColor(premiumPlanElements, '#e50914');

    for (let element of basicPlanElements) {
        element.onclick = () => {
            console.log("Color DN");
            changeBackgroundColor(basicPlanHeader,'#e50914');
            changeBackgroundColor(standardPlanHeader,'#ffbebe');
            changeBackgroundColor(premiumPlanHeader,'#ffbebe');
            changeColor(basicPlanElements, '#e50914');
            changeColor(standarPlanElements, 'black');
            changeColor(premiumPlanElements, 'black');
            selected = 0;
            setUserPlan(0);
        }
    }
    for (let element of standarPlanElements) {
        element.onclick = () => {
            changeBackgroundColor(basicPlanHeader,'#ffbebe');
            changeBackgroundColor(standardPlanHeader,'#e50914');
            changeBackgroundColor(premiumPlanHeader,'#ffbebe');
            changeColor(basicPlanElements, 'black');
            changeColor(standarPlanElements, '#e50914');
            changeColor(premiumPlanElements, 'black');
            selected = 1;
            setUserPlan(1);
        }
    }
    for (let element of premiumPlanElements) {
        element.onclick = () => {
            changeBackgroundColor(basicPlanHeader,'#ffbebe');
            changeBackgroundColor(standardPlanHeader,'#ffbebe');
            changeBackgroundColor(premiumPlanHeader,'#e50914');
            changeColor(basicPlanElements, 'black');
            changeColor(standarPlanElements, 'black');
            changeColor(premiumPlanElements, '#e50914');
            selected = 2;
            setUserPlan(2);
        }
    }

    continueButton.addEventListener('click', () => {
        setStage(3);
        window.location = "signup3-0.html";
    })
})

function changeColor(elements, newColor) {
    for (let element of elements) {
        element.style.color = newColor;
    }
}

function changeBackgroundColor(element, newColor) {
    element.style.background = newColor;
}