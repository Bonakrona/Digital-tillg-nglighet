function startCoundDown(countDownDiv) {
    let countdownNumbers = [3, 2, 1];
    countDownDiv.innerHTML = ""; 

    function displayNextNumber(index) {
        if (index < countdownNumbers.length) {
            countDownDiv.innerHTML = `<h1>${countdownNumbers[index]}</h1>`;
            setTimeout(() => displayNextNumber(index + 1), 1000);
        } else {
            countDownDiv.innerHTML = `<h1>Go!</h1>`;
            setTimeout(() => countDownDiv.innerHTML = "", 1000); 
        }
    }

    displayNextNumber(0); 
}
