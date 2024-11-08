startButton.addEventListener("click", startProgram);

function startProgram() {

    var textInput = document.getElementById('textarea').value;
    const newContent = document.createTextNode(textInput);

    if (clickHighlightWords && !clickSlidingWords) {

        console.log("marked function clicked");
        const highlightWordReader = document.createElement("div");
        highlightWordReader.id = "highlightWordReader";
        clearReader("highlightWordReader");
        highlightWordReader.append(newContent);
        const currentDiv = document.getElementById("markReader");
        document.body.insertBefore(highlightWordReader, currentDiv);
        highlightWords(highlightWordReader);

    } else if (!clickHighlightWords && clickSlidingWords) {
        console.log("moving function clicked");
        const slidingWordReader = document.createElement("div");
        slidingWordReader.id = "slidingWordReader";
        clearReader("slidingWordReader");
        slidingWordReader.append(newContent);
        const currentDiv = document.getElementById("slidingWordReader");
        document.body.insertBefore(slidingWordReader, currentDiv);

        startSlidingReader(slidingWordReader);

    } else if (clickHighlightWords && clickSlidingWords) {
        console.log("Both clicked");
    } else {
        console.log("none clicked");
    }
}

function clearReader(elementID) {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerHTML = "";
    }
}