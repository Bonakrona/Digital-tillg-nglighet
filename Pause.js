let paused = false;
const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener("click", pauseProgram);

function pauseProgram() {
    if (paused) {
        paused = false;
        pauseButton.innerHTML = `<img src="Images/pause1.png" height="22" style="vertical-align: -3px;" /> Pause`;
    } else {
        paused = true;
        pauseButton.innerHTML = `<img src="Images/pause1.png" height="22" style="vertical-align: -3px;" /> Resume`;
    }
    
}

