function startSlidingReader(slidingWordReader) {
    const text = slidingWordReader.textContent; 
    const words = text.split(" ");         
    let index = 0;
    words.unshift("","");
    

    function displayNextWords() {
        if (paused) {
            setTimeout(displayNextWords, 100); 
            return;
        }

        if (index < words.length) {
            const currentWords = words.slice(index, index + 5).join(" ");
            slidingWordReader.innerHTML = currentWords;   
            
            //words[index+2] = `<span class="highlight">${currentWords[index]}</span>`;
            highlightCurrentWord(slidingWordReader);
            
        
            index++;
            
            setTimeout(displayNextWords, 1000 / pace); 
        
        }
    }

    function backProgram() {
        index = Math.max(0, index - 5); 
    }

    backButton.addEventListener("click", backProgram);

    displayNextWords();
}