function nbrOfHighlightedWordsVisibility() {
    const dropdownButton = document.getElementById('nbrOfWordsButton');
    const dropdownLabel = document.getElementById('nbrOfWordsLabel');

    if (clickHighlightWords) {
        dropdownButton.style.display = 'inline-block'; 
        dropdownLabel.style.display = 'inline-block'; 
    } else {
        dropdownButton.style.display = 'none'; 
        dropdownLabel.style.display = 'none'; 
    }
}

setInterval(() => {nbrOfHighlightedWordsVisibility();}, 300); 
