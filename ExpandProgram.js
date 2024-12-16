const expandButton = document.getElementById("expandButton");
let isExpanded = false;

expandButton.addEventListener("click", () => {
    const settingsDiv = document.getElementById("settings");
    const runningDiv = document.getElementById("running");

    if (!isExpanded) {
        settingsDiv.classList.add("collapsed");
        runningDiv.classList.add("expanded");
        expandButton.innerHTML = `<img src="Images/collapse1.png" height="22" style="vertical-align: -3px;" /> Collapse`;
    } else {
        settingsDiv.classList.remove("collapsed");
        runningDiv.classList.remove("expanded");
        expandButton.innerHTML = `<img src="Images/expand1.png" height="22" style="vertical-align: -3px;" /> Expand`;
    }

    isExpanded = !isExpanded;
});
