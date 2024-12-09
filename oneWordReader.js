function startOneWordReader(oneWordReader) {
    const pace = document.getElementById("paceEntered").value;
    const text = oneWordReader.textContent;
    const words = text.split(" ");
    let index = 0;
    const highlightColor = document.getElementById("highlightColor").value || "#ffff00";

    function displayNextWord() {
        if (paused) {
            setTimeout(displayNextWord, 100);
            return;
        }

        if (index < words.length) {
            const currentWord = words[index];
            oneWordReader.innerHTML = `<span style="background-color: ${highlightColor};"> ${currentWord}</span>`; ;

            index++;

            setTimeout(displayNextWord, 2000 / pace);
        }
    }

    function backProgram() {
        index = Math.max(0, index - 5);
        const currentWord = words[index];
        oneWordReader.innerHTML = `<span style="background-color: ${highlightColor};">${currentWord}</span>`;
    }

    backButton.addEventListener("click", backProgram);

    displayNextWord();
}
