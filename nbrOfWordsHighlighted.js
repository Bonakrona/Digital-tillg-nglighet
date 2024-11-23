function nbrOfHighlightedWordsVisibility() {
    const dropdownButton = document.getElementById('nbrOfWordsButton');

    if (clickHighlightWords) {
        dropdownButton.style.display = 'inline-block'; 
    } else {
        dropdownButton.style.display = 'none'; 
    }
}

setInterval(() => {nbrOfHighlightedWordsVisibility();}, 300); 
