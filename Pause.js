let paused = false;
const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener("click", pauseProgram);

function pauseProgram() {
    if (paused) {
        paused = false;
        pauseButton.innerHTML = "Pause";
    } else {
        paused = true;
        pauseButton.innerHTML = "Resume";
    }
    
}

