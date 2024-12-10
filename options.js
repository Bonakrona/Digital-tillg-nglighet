var clickHighlightWords = false
document.getElementById('highlightWords').addEventListener("click", function () {
    if (clickHighlightWords) {
        clickHighlightWords = false
        console.log("unclicked");
        document.getElementById("highlightWords").checked = false;
    } else {
        clickHighlightWords = true
        console.log("clicked")
        document.getElementById("highlightWords").checked = true;
    }
});

var clickSlidingWords = false
document.getElementById('slidingWords').addEventListener("click", function () {
    if (clickSlidingWords) {
        clickSlidingWords = false
        console.log("unclicked");
        document.getElementById("slidingWords").checked = false;
    } else {
        clickSlidingWords = true
        console.log("clicked")
        document.getElementById("slidingWords").checked = true;
    }
});

var clickOneWord = false
document.getElementById('oneWordOption').addEventListener("click", function () {
    if (clickOneWord) {
        clickOneWord = false
        console.log("unclicked");
        document.getElementById("oneWordOption").checked = false;
    } else {
        clickOneWord = true
        console.log("clicked")
        document.getElementById("oneWordOption").checked = true;
    }
});


var clickedPaceWordLength = false
document.getElementById('paceWordLength').addEventListener("click", function () {
    if (clickedPaceWordLength) {
        clickedPaceWordLength = false
        console.log("unclicked");
        document.getElementById("paceWordLength").checked = false;
    } else {
        clickedPaceWordLength = true
        console.log("clicked")
        document.getElementById("paceWordLength").checked = true;
    }
});