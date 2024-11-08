function highlightMarkReader(markReader) {
    let pace = 1; // get from button click

    const text = markReader.innerHTML;
    const words = text.split(" ");
    const wordCount = words.length;

    function highlightWord(i) {
        if (i < wordCount) {
            const word = words[i];
            words[i] = `<span class="highlight">${word}</span>`;
            markReader.innerHTML = words.join(" ");
            setTimeout(() => highlightWord(i + 1), 1000 / pace);
        }
    }
    highlightWord(0);
}


function highlightMovingReader(movingReader) {
    let pace = 1; // get from button click

    const text = movingReader.innerHTML;
    const words = text.split(" ");
    const wordCount = words.length;
}
