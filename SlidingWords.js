function startSlidingReader(slidingWordReader) {
    // const pace = document.getElementById("paceEntered").value;
    const text = slidingWordReader.textContent;
    const words = text.split(" ");
    let index = 0;
    words.unshift("", "");


    function displayNextWords() {
        if (paused) {
            setTimeout(displayNextWords, 100);
            return;
        }

        if (index < words.length) {
            const pace = document.getElementById("paceEntered").value
            const currentWords = words.slice(index, index + 5).join(" ");
            slidingWordReader.innerHTML = currentWords;

            //words[index+2] = `<span class="highlight">${currentWords[index]}</span>`;
            highlightCurrentWord(slidingWordReader);


            index++;

            if(clickedPaceWordLength)  {
                for (let i = 0; i < words[index].length; i++) {
                    setTimeout(displayNextWords, 2000 / pace);
                }

            } else {
                setTimeout(displayNextWords, 2000 / pace);
            }
        }
    }

    function backProgram() {
        index = Math.max(0, index - 5);
        const currentWords = words.slice(index, index + 5).join(" ");
        slidingWordReader.innerHTML = currentWords;
        if (paused) {
            highlightCurrentWord(slidingWordReader);
        }
    }

    backButton.addEventListener("click", backProgram);

    displayNextWords();
}