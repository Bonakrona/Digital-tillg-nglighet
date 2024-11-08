// function startMovingReader(movingReader) {
//     const text = movingReader.textContent; 
//     const words = text.split(" ");         
//     let index = 0;                         

//     function displayNextWords() {
//         if (index < words.length) {
//             const currentWords = words.slice(index, index + 5).join(" ");
//             movingReader.innerHTML = currentWords;           
            
//             index++;
            
//             setTimeout(displayNextWords, 10000000); 
//         }
//     }
//     displayNextWords();
// }