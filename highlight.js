function highlightWords(highlightWordReader) {
    
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
        if (selectedNbrOfHighlightedWords == "oneWord") { 
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
            const pace = document.getElementById("paceEntered").value;
            const word = words[index];
            words[index] = `<span style="background-color: ${highlightColor};"> ${word}</span>`; 
            highlightWordReader.innerHTML = words.join(" ");
            if (selectedNbrOfHighlightedWords == "oneWord") { 
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].replace(`<span style="background-color: ${highlightColor};">`, "").replace(`</span>`, "");
                }
                words[index] = word;
            }
            index++;

            let delay;
            if (clickedPaceWordLength) {
                const wordLength = word.length || 1; 
                console.log("Highlight log:");
                console.log(index);
                console.log(words[index]);
                delay = (2000 / pace) * wordLength * 0.3;
            } else {
                delay = 2000 / pace;
            }

            setTimeout(highlightWord, delay);
            
        }
    }
    highlightWord();
}

function highlightCurrentWord(slidingWordReader) {
    
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
            
            const pace = document.getElementById("paceEntered").value;
            const word = words[i+2];
            words[i+2] = `<span style="background-color: ${highlightColor};"> ${word}</span>`; 
            slidingWordReader.innerHTML = words.join(" ");

            let delay;
            if (clickedPaceWordLength) {
                const wordLength = words[i + 2].length || 1; 
                delay = (2000 / pace) * wordLength * 0.3;
            } else {
                delay = 2000 / pace;
            }

            setTimeout(() => highlightWord(i + 1), delay);
        }
    }
    highlightWord(0);
}

