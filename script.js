startButton.addEventListener("click", startProgram);

function startProgram() {

    var textInput = document.getElementById('textarea').value;
    const newContent = document.createTextNode(textInput);

    const getTextSize = document.querySelector('.input').value || 14; //14 eftersom vi har det som default
    const applyTextSize = `font-size: ${getTextSize}px;`;


    if (clickHighlightWords && !clickSlidingWords) {

        console.log("marked function clicked");
        const highlightWordReader = document.createElement("div");
        highlightWordReader.id = "highlightWordReader";
        clearReader("highlightWordReader");
        highlightWordReader.append(newContent);

        highlightWordReader.style = applyTextSize;

        const currentDiv = document.getElementById("markReader");
        document.body.insertBefore(highlightWordReader, currentDiv);
        highlightWords(highlightWordReader);

    } else if (!clickHighlightWords && clickSlidingWords) {
        console.log("moving function clicked");
        const slidingWordReader = document.createElement("div");
        slidingWordReader.id = "slidingWordReader";
        clearReader("slidingWordReader");
        slidingWordReader.append(newContent);

        slidingWordReader.style = applyTextSize;

        const currentDiv = document.getElementById("slidingWordReader"); // funkar ej för tillfället
        document.body.insertBefore(slidingWordReader, currentDiv); // funkar ej för tillfället

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