getStartButton.addEventListener("click", startProgram);

function startProgram() {
    console.log(textInput);

    const markReader = document.createElement("div");
    markReader.id = "markReader";

    var textInput = document.getElementById('textarea').value;

    const newContent = document.createTextNode(textInput);

    clearMarkReader("markReader");
    markReader.append(newContent);

    const currentDiv = document.getElementById("markReader");
    document.body.insertBefore(markReader, currentDiv);

    mark(markReader);
}

function clearMarkReader(elementID) {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerHTML = "";
    }
}

function mark(markReader) {
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
