startButton.addEventListener("click", startProgram);
getTestText.addEventListener("click", getTestTextFunction);

function startProgram() {

    var textInput = document.getElementById('textarea').value;
    const newContent = document.createTextNode(textInput);

    const getTextSize = document.getElementById("sizeEntered").value || 14; //14 eftersom vi har det som default
    const selectFont = document.getElementById("selectFont");
    const selectedFont = selectFont.value || "Times New Roman"; 
    
    const textColor = document.getElementById("textColor").value || "#000000";
    const bgColor = document.getElementById("bgColor").value || "#ffffff";
    
    const applyTextSize = `font-size: ${getTextSize}px;`;
    const applyFont = `font-family: ${selectedFont};`;
    
    const highLightColor = document.getElementById("highlightColor").value || "#ffff00";
    const applyColors = `color: ${textColor}; background-color: ${bgColor}; highlight-color: ${highLightColor};`;
    
    const applyAllStyles = `${applyTextSize} ${applyFont} ${applyColors}`;
    const highlightWordReader = document.createElement("div");
    const slidingWordReader = document.createElement("div");
    highlightWordReader.style.backgroundColor = bgColor;
    slidingWordReader.style.backgroundColor = bgColor;
    
    if (clickHighlightWords && !clickSlidingWords) {

        console.log("marked function clicked");
        highlightWordReader.id = "highlightWordReader";
        clearReader("highlightWordReader");
        highlightWordReader.append(newContent);

        highlightWordReader.style.cssText = applyAllStyles;

        const currentDiv = document.getElementById("markReader");
        document.body.insertBefore(highlightWordReader, currentDiv);
        highlightWords(highlightWordReader);

    } else if (!clickHighlightWords && clickSlidingWords) {
        console.log("moving function clicked");
        slidingWordReader.id = "slidingWordReader";
        clearReader("slidingWordReader");
        slidingWordReader.append(newContent);

        slidingWordReader.style.cssText = applyAllStyles;

        const currentDiv = document.getElementById("slidingWordReader"); // funkar ej för tillfället
        document.body.insertBefore(slidingWordReader, currentDiv); // funkar ej för tillfället

        startSlidingReader(slidingWordReader);

    } else if (clickHighlightWords && clickSlidingWords) {
        clearReader("highlightWordReader");
        clearReader("slidingWordReader");

        highlightWordReader.id = "highlightWordReader";
        slidingWordReader.id = "slidingWordReader";

        highlightWordReader.append(newContent);
        slidingWordReader.append(newContent);

        highlightWordReader.style.cssText = applyAllStyles;
        slidingWordReader.style.cssText = applyAllStyles;

        const currentDivMark = document.getElementById("markReader");
        const currentDivSlide = document.getElementById("slidingWordReader"); // funkar ej för tillfället
        
        document.body.insertBefore(highlightWordReader, currentDivMark);
        document.body.insertBefore(slidingWordReader, currentDivSlide); // funkar ej för tillfället

        startSlidingReader(slidingWordReader);
        highlightWords(highlightWordReader);
        
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

function getTestTextFunction() {
    const textArea = document.getElementById('textarea');
    textArea.value = "Hi and Welcome! This is a test text you can use in order to try out our options and your figure out your preferences. We truly hope you enjoy this experience and that you will find our tool useful. Please let us know if you have any feedback or suggestions. We are always looking to improve our services. Thank you for your time!";
    console.log("Test text inserted");
}