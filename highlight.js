function highlightWords(highlightWordReader) {
    const pace = document.getElementById("paceEntered").value;
    const highlightColor = document.getElementById("highlightColor").value || "#ffff00";
    const bgColor = document.getElementById("bgColor").value || "#ffffff";
    let index = 0;

    const text = highlightWordReader.innerHTML;
    const words = text.split(" ");
    const wordCount = words.length;

    const selectNbrOfHighlightedWords = document.getElementById("nbrOfWordsButton");
    const selectedNbrOfHighlightedWords = selectNbrOfHighlightedWords.value || "wholeText";

    function backProgram() {
        const start = Math.max(0, index - 5); 
        if (selectedNbrOfHighlightedWords == "oneWord") { //senare lägga till one sentence som alternativ
            words[start] = `<span style="background-color: ${highlightColor};"> ${words[start]}</span>`;
        } else {
            for (let i = index - 1; i >= start; i--) {
                words[i] = words[i].replace(`<span style="background-color: ${highlightColor};">`, "").replace(`</span>`, "");
            }
        }
        index = start; 
        highlightWordReader.innerHTML = words.join(" ");
    }

    backButton.addEventListener("click", backProgram);

    function highlightWord() {
        if (paused) {
            setTimeout(() => highlightWord(index), 100); 
            return;
        }

        if (index < wordCount) {

            const word = words[index];
            words[index] = `<span style="background-color: ${highlightColor};"> ${word}</span>`; 
            highlightWordReader.innerHTML = words.join(" ");
            if (selectedNbrOfHighlightedWords == "oneWord") { //senare lägga till one sentence som alternativ
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].replace(`<span style="background-color: ${highlightColor};">`, "").replace(`</span>`, "");
                }
                words[index] = word;
            }
            index++;
            setTimeout(highlightWord, 1000 / pace);
        }
    }
    highlightWord();
}

function highlightCurrentWord(slidingWordReader) {
    const pace = document.getElementById("paceEntered").value;
    const highlightColor = document.getElementById("highlightColor").value || "#ffff00";

    const text = slidingWordReader.innerHTML;
    const words = text.split(" ");
    const wordCount = words.length;

    function highlightWord(i) {
        if (paused) {
            setTimeout(highlightWord(i), 100); 
            return;
        }

        if (i < wordCount) {
            const word = words[i+2];
            words[i+2] = `<span style="background-color: ${highlightColor};"> ${word}</span>`; 
            slidingWordReader.innerHTML = words.join(" ");
            setTimeout(() => highlightWord(i + 1), 1000 / pace);
        }
    }
    highlightWord(0);
}
