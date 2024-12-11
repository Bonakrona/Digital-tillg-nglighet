/*function countDown(callback) {
    let count = 3;
    const countdownDiv = document.getElementById("running");
    countdownDiv.innerHTML = `<div id="countdown" style="font-size: 48px; text-align: center;">${count}</div>`;

    function updateCountdown() {
        if (count > 0) {
            count--;
            document.getElementById("countdown").innerText = count;
            setTimeout(updateCountdown, 1000);
        } else {
            document.getElementById("countdown").innerText = "Start!";
            setTimeout(() => {
                document.getElementById("countdown").remove();
                callback();  // Kör startProgram-funktionens fortsättning efter nedräkningen
            }, 1000);
        }
    }

    setTimeout(updateCountdown, 1000);
}*/

/*function startCountdown(countdownDiv) {
    // Create a div element for displaying the countdown
    //const countdownDiv = countdownDiv;

    // Style the div (optional)
    countdownDiv.style.cssText = `
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        margin: 20px;
        padding: 10px;
        border: 2px solid black;
        display: inline-block;
        background-color: #f0f0f0;
    `;

    // Append the div to the document body
    document.body.appendChild(countdownDiv);

    let count = 3; // Start countdown from 3

    function updateCountdown() {
        if (count > 0) {
            countdownDiv.textContent = count; // Update the countdown number
            count--;
            setTimeout(updateCountdown, 1000); // Wait 1 second
        } else {
            countdownDiv.textContent = ""; // Clear the div when countdown is complete
            document.body.removeChild(countdownDiv); // Remove the div
            // Add your logic here after countdown ends
            console.log("Countdown complete! Starting the program...");
            // You can call any other functions or start your program here
        }
    }

    updateCountdown();
}*/

/*function startCountdown() {
    const runningDiv = document.getElementById("running"); // Reference to your runningDiv
    
    // Create a div element for displaying the countdown
    const countdownDiv = document.createElement("div");
    countdownDiv.id = "countdown"; // Give it a specific id for styling or manipulation later

    // Style the div (optional)
    countdownDiv.style.cssText = `
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        margin: 20px;
        padding: 10px;
        border: 2px solid black;
        display: inline-block;
        background-color: #f0f0f0;
    `;

    runningDiv.innerHTML = ''; // Clear the content of runningDiv before showing the countdown
    runningDiv.appendChild(countdownDiv); // Add the countdown to runningDiv

    let count = 3; // Start countdown from 3

    function updateCountdown() {
        if (count > 0) {
            countdownDiv.textContent = count; // Update the countdown number
            count--;
            setTimeout(updateCountdown, 1000); // Wait 1 second
        } else {
            countdownDiv.textContent = "Go!"; // Change text after countdown finishes
            setTimeout(() => {
                countdownDiv.remove(); // Remove countdown div
                startProgram(); // Call startProgram when countdown is complete
            }, 1000); // Wait 1 second after "Go!" before starting the program
        }
    }

    updateCountdown(); // Start the countdown
}*/




/*function countDown() {

    $(document).ready(function () {
        var counter = 3;
        
        var timer = setInterval( function() { 
            
            $('#countdown').remove();     
            
            var countdown = $('<span id="countdown">'+(counter==0?'SMILE!!':counter)+'</span>'); 
            countdown.appendTo($('.running'));
            setTimeout( () => {
                if (counter >-1) {
                    $('#countdown').css({ 'font-size': '40vw', 'opacity': 0 }); 
                } else {
                    $('#countdown').css({ 'font-size': '10vw', 'opacity': 50 });
                }
            },20);
            counter--;
            if (counter == -1) clearInterval(timer);
        }, 1000);
    });
}*/
/*
function startCountdown() {
    const runningDiv = document.getElementById("running");
    runningDiv.innerHTML = ''; // Clear any existing content in runningDiv

    let count = 3; // Start countdown from 3

    // Create a countdown element
    const countdownElement = document.createElement("div");
    countdownElement.id = "countdown";
    countdownElement.style.cssText = `
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        margin-top: 20px;
    `;
    runningDiv.appendChild(countdownElement);

    function updateCountdown() {
        if (count > 0) {
            countdownElement.textContent = count; // Update the countdown number
            count--;
            setTimeout(updateCountdown, 1000); // Wait 1 second
        } else {
            countdownElement.textContent = "Go!"; // Show "Go!" when countdown is finished
            setTimeout(() => {
                countdownElement.remove(); // Remove the countdown
                startProgram(); // Call startProgram after countdown ends
            }, 1000); // Wait 1 second after "Go!" before starting the program
        }
    }

    updateCountdown(); // Start the countdown
}

*/

function startCoundDown(countDownDiv) {
    let countdownNumbers = [3, 2, 1];
    countDownDiv.innerHTML = ""; // Clear any existing content

    function displayNextNumber(index) {
        if (index < countdownNumbers.length) {
            countDownDiv.innerHTML = `<h1>${countdownNumbers[index]}</h1>`;
            setTimeout(() => displayNextNumber(index + 1), 1000);
        } else {
            countDownDiv.innerHTML = `<h1>Go!</h1>`;
            setTimeout(() => countDownDiv.innerHTML = "", 1000); // Clear after "Go!"
        }
    }

    displayNextNumber(0); // Start the countdown
}
