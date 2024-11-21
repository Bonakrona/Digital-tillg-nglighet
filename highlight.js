function highlightWords(highlightWordReader) {
    const pace = document.getElementById("paceEntered").value;
    let index = 0;

    const text = highlightWordReader.innerHTML;
    const words = text.split(" ");
    const wordCount = words.length;

    function backProgram() {
        const start = Math.max(0, index - 5); 
        for (let i = index - 1; i >= start; i--) {
            words[i] = words[i].replace(`<span class="highlight">`, "").replace(`</span>`, "");
        }
        index = start; 
        updateDisplay(); 
    }

    backButton.addEventListener("click", backProgram);

    function highlightWord() {
        if (paused) {
            setTimeout(() => highlightWord(index), 100); 
            return;
        }

        if (index < wordCount) {
            const word = words[index];
            words[index] = `<span class="highlight">${word}</span>`;
            highlightWordReader.innerHTML = words.join(" ");
            //words[index] = word; //Insåg att denna gjorde att bara ett ord markerades --> kanske vill använda i framtiden

            index++;

            //setTimeout(() => highlightWord(i + 1), 1000 / pace);
            setTimeout(highlightWord, 1000 / pace);
        }
    }
    highlightWord();

}


function highlightCurrentWord(slidingWordReader) {
    const pace = document.getElementById("paceEntered").value;

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
            words[i+2] = `<span class="highlight">${word}</span>`;
            slidingWordReader.innerHTML = words.join(" ");
            setTimeout(() => highlightWord(i + 1), 1000 / pace);
        }
    }
    highlightWord(0);
}
