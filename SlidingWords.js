function startSlidingReader(slidingWordReader) {
    const text = slidingWordReader.textContent; 
    const words = text.split(" ");         
    let index = 0;                         

    function displayNextWords() {
        if (index < words.length) {
            const currentWords = words.slice(index, index + 5).join(" ");
            slidingWordReader.innerHTML = currentWords;   
            
            //words[index+2] = `<span class="highlight">${currentWords[index]}</span>`;
            highlightCurrentWord(slidingWordReader);
        
            index++;
        
            setTimeout(displayNextWords, 1000); 
        }
    }
    displayNextWords();
}