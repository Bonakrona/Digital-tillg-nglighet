let paused = false;
const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener("click", pauseProgram);

function pauseProgram() {
    if (paused) {
        pauseButton.innerHTML = `<img src="Images/pause1.png" height="20" style="vertical-align: -3px;" /> Pause`;
    } else {
        pauseButton.innerHTML = `<img src="Images/pause1.png" height="20" style="vertical-align: -3px;" /> Resume`;
    }
    paused = !paused;
}

