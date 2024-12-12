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


            /*index++;

            if(clickedPaceWordLength)  {
                for (let i = 0; i < words[index].length; i++) {
                    setTimeout(displayNextWords, 2000 / pace);
                }

            } else {
                setTimeout(displayNextWords, 2000 / pace);
            }*/
            
            let delay;
            if (clickedPaceWordLength) {
                const wordLength = words[index + 2].length || 1; // Avoid division by 0
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


//Below: få tredje ordet på samma plats
/*function startSlidingReader(slidingWordReader) {
    const text = slidingWordReader.textContent;
    const words = text.split(" ");
    let index = 0;
    let paused = false;
    const backButton = document.getElementById("backButton"); // Back button

    words.unshift("", ""); // Add placeholders for alignment

    function displayNextWords() {
        if (paused) {
            setTimeout(displayNextWords, 100);
            return;
        }

        if (index < words.length) {
            const pace = document.getElementById("paceEntered").value;

            // Get the current 5 words
            const currentWords = words.slice(index, index + 5);
            const middleWord = currentWords[2] || ""; // The third word

            // Fixed starting position for the third word
            const screenRightEdge = slidingWordReader.offsetWidth;
            const middleWordWidth = getTextWidth(middleWord, slidingWordReader);

            // Calculate positions for words relative to the third word
            const firstWordWidth = getTextWidth(currentWords[0], slidingWordReader);
            const secondWordWidth = getTextWidth(currentWords[1], slidingWordReader);
            const fourthWordWidth = getTextWidth(currentWords[3], slidingWordReader);
            const fifthWordWidth = getTextWidth(currentWords[4], slidingWordReader);

            // Set the position of the middle word (third word) at a fixed point
            const fixedMiddlePosition = 1030; // You can adjust this value

            // Calculate relative positions based on the middle word's width
            const secondWordPosition = fixedMiddlePosition - secondWordWidth - 10; // Gap of 10px
            const firstWordPosition = secondWordPosition - firstWordWidth - 10; // Gap of 10px

            const fourthWordPosition = fixedMiddlePosition + middleWordWidth + 10; // Gap of 10px
            const fifthWordPosition = fourthWordPosition + fourthWordWidth + 10; // Gap of 10px

            // Update slidingWordReader's content
            slidingWordReader.innerHTML = `
                <span style="position: absolute; left: ${firstWordPosition}px;">${currentWords[0] || ""}</span>
                <span style="position: absolute; left: ${secondWordPosition}px;">${currentWords[1] || ""}</span>
                <span style="position: absolute; left: ${fixedMiddlePosition}px;">${middleWord}</span>
                <span style="position: absolute; left: ${fourthWordPosition}px;">${currentWords[3] || ""}</span>
                <span style="position: absolute; left: ${fifthWordPosition}px;">${currentWords[4] || ""}</span>
            `;

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
        displayNextWords();
    }

    function getTextWidth(text, element) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const computedStyle = getComputedStyle(element);
        context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;
        return context.measureText(text || "").width;
    }

    backButton.addEventListener("click", backProgram);

    displayNextWords();
}*/

