let welcomeText = false;
function welcomeDisplayText() {
    var text = document.getElementById("welcomeTextField");
    if (welcomeText) {
        text.style.display = "none";
        welcomeText = false;
    } else {
        text.style.display = "block";
        welcomeText = true;
    }
}

let infoText = false;
function infoDisplayText() {
    var text = document.getElementById("infoTextField");
    if (infoText) {
        text.style.display = "none";
        infoText = false;
    } else {
        text.style.display = "block";
        infoText = true;
    }
}