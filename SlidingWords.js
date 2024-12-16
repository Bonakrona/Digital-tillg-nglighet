function startSlidingReader(slidingWordReader) {
    
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

            highlightCurrentWord(slidingWordReader);

            
            let delay;
            if (clickedPaceWordLength) {
                const wordLength = words[index + 2].length || 1; 
                delay = (2000 / pace) * wordLength * 0.3;
                console.log("Slider log:");
                console.log(index+2)
            } else {
                delay = 2000 / pace;
            }

            index++;
            setTimeout(displayNextWords, delay);
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


