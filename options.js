var clickedMarkedFunction = false
document.getElementById('markOption').addEventListener("click", function () {
    if (clickedMarkedFunction) {
        clickedMarkedFunction = false
        console.log("unclicked");
        document.getElementById("markOption").checked = false;
    } else {
        clickedMarkedFunction = true
        console.log("clicked")
        document.getElementById("markOption").checked = true;
    }
});

var clickedMovingFunction = false
document.getElementById('movingOption').addEventListener("click", function () {
    if (clickedMovingFunction) {
        clickedMovingFunction = false
        console.log("unclicked");
        document.getElementById("movingOption").checked = false;
    } else {
        clickedMovingFunction = true
        console.log("clicked")
        document.getElementById("movingOption").checked = true;
    }
});

