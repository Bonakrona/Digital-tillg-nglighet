getStartButton.addEventListener("click", startProgram);

function startProgram() {

    var textInput = document.getElementById('textarea').value;
    const newContent = document.createTextNode(textInput);
    
    if (clickedMarkedFunction && !clickedMovingFunction) {

        console.log("marked function clicked");
        const markReader = document.createElement("div");
        markReader.id = "markReader";
        clearReader("markReader");
        markReader.append(newContent);
        const currentDiv = document.getElementById("markReader");
        document.body.insertBefore(markReader, currentDiv);
        highlightMarkReader(markReader);
        
    } else if (!clickedMarkedFunction && clickedMovingFunction) {
        console.log("moving function clicked");
        const movingReader = document.createElement("div");
        movingReader.id = "movingReader";
        clearReader("movingReader");
        movingReader.append(newContent);
        const currentDiv = document.getElementById("movingReader");
        document.body.insertBefore(movingReader, currentDiv);
        
        startMovingReader(movingReader);
        
    } else if (clickedMarkedFunction && clickedMovingFunction) {
        console.log("Both clicked");
    } else {
        console.log("none clicked");
    }
}

function clearReader(elementID) {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerHTML = "";
    }
}



function startMovingReader(movingReader) {
    const text = movingReader.textContent; 
    const words = text.split(" ");         
    let index = 0;                         

    function displayNextWords() {
        if (index < words.length) {
            const currentWords = words.slice(index, index + 5).join(" ");
            
            movingReader.innerHTML = currentWords;

            index++;
            
            setTimeout(displayNextWords, 1000); 
        }
    }
    displayNextWords();
}

