function highlightWords(highlightWordReader) {
    let pace = 1; // get from button click

    const text = highlightWordReader.innerHTML;
    const words = text.split(" ");
    const wordCount = words.length;

    function highlightWord(i) {
        if (paused) {
            setTimeout(() => highlightWord(i), 100); 
            return;
        }

        if (i < wordCount) {
            const word = words[i];
            words[i] = `<span class="highlight">${word}</span>`;
            highlightWordReader.innerHTML = words.join(" ");
            setTimeout(() => highlightWord(i + 1), 1000 / pace);
        }
    }
    highlightWord(0);
}


function highlightCurrentWord(slidingWordReader) {
    let pace = 1; // get from button click

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
