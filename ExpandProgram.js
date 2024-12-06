// const expandButton = document.getElementById("expandButton");
// let isExpanded = false;  // Initial state: settings and running are visible

// expandButton.addEventListener("click", expandOrCollapse);

// function expandOrCollapse() {
//     const settingsDiv = document.getElementById("settings");
//     const runningDiv = document.getElementById("running");

//     if (!isExpanded) {
//         // Expand the running div
//         runningDiv.classList.add("expanded");
//         settingsDiv.classList.add("collapsed");
//         expandButton.textContent = "Collapse";
//     } else {
//         // Restore original layout
//         runningDiv.classList.remove("expanded");
//         settingsDiv.classList.remove("collapsed");
//         expandButton.textContent = "Expand";
//     }

//     isExpanded = !isExpanded;  // Toggle state
// }


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
