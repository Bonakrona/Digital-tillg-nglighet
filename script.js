startButton.addEventListener("click", startProgram);
getTestText.addEventListener("click", getTestTextFunction);

function startProgram() {
    var textInput = document.getElementById('textarea').value;
    const newContent = document.createTextNode(textInput);

    const getTextSize = document.getElementById("sizeEntered").value || 14; // Default font size
    const getLineHeight = document.getElementById("lineHeightEntered").value || 2;
    const selectFont = document.getElementById("selectFont");
    const selectedFont = selectFont.value || "Times New Roman";

    const textColor = document.getElementById("textColor").value || "#000000";
    const bgColor = document.getElementById("bgColor").value || "#ffffff";

    const applyTextSize = `font-size: ${getTextSize}px; line-height: ${(38+(getLineHeight - 1)*5)}px;`;
    const applyFont = `font-family: ${selectedFont};`;

    const highLightColor = document.getElementById("highlightColor").value || "#ffff00";
    const applyColors = `color: ${textColor}; background-color: ${bgColor};`;

    const applyAllStyles = `${applyTextSize} ${applyFont} ${applyColors}`;

    const highlightWordReader = document.createElement("div");
    const slidingWordReader = document.createElement("div");
    highlightWordReader.style.backgroundColor = bgColor;
    slidingWordReader.style.backgroundColor = bgColor;


    const runningDiv = document.getElementById("running");

    highlightWordReader.id = "highlightWordReader";
    highlightWordReader.innerHTML = "";
    highlightWordReader.style.cssText = applyAllStyles;

    highlightWordReader.style.marginTop = "10px";
    highlightWordReader.style.height = "400px";  // Fixed height
    highlightWordReader.style.overflowY = "auto";  // Vertical scrolling
    highlightWordReader.style.border = "1px solid #ccc";  // Optional border

    slidingWordReader.id = "slidingWordReader";
    slidingWordReader.innerHTML = "";
    slidingWordReader.style.cssText = applyAllStyles;

    if (clickHighlightWords && !clickSlidingWords) {
        console.log("Marked function clicked");

        let oldHighlightReader = document.getElementById("highlightWordReader");
        if (oldHighlightReader) {
            oldHighlightReader.remove();
        }

        highlightWordReader.append(newContent);

        runningDiv.appendChild(highlightWordReader);
        highlightWords(highlightWordReader);
    } else if (!clickHighlightWords && clickSlidingWords) {
        console.log("Moving function clicked");

        let oldSlidingReader = document.getElementById("slidingWordReader");
        if (oldSlidingReader) {
            oldSlidingReader.remove();
        }

        slidingWordReader.append(newContent);


        runningDiv.appendChild(slidingWordReader);
        startSlidingReader(slidingWordReader);

    } else if (clickHighlightWords && clickSlidingWords) {
        console.log("Combined function clicked");

        let oldSlidingReader = document.getElementById("slidingWordReader");
        if (oldSlidingReader) {
            oldSlidingReader.remove();
        }

        let oldHighlightReader = document.getElementById("highlightWordReader");
        if (oldHighlightReader) {
            oldHighlightReader.remove();
        }
      
        slidingWordReader.append(newContent.cloneNode(true));
        highlightWordReader.append(newContent.cloneNode(true));

        runningDiv.appendChild(slidingWordReader);
        startSlidingReader(slidingWordReader);

        runningDiv.appendChild(highlightWordReader);
        highlightWords(highlightWordReader);

    } else {
        console.log("None clicked");
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