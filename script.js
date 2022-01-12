const timeoutInMiliseconds = 3000;
let timeoutId;

function startTimer() {
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}

function doInactive() {
    // does whatever you need it to actually do - probably signs them out or stops polling the server for info
    window.alert("Still have questions? Book a time to speak to our team and find the right solution.");
}

function resetTimer() { 
    window.clearTimeout(timeoutId)
    startTimer();
}

function setupTimers () {
    console.log('page loaded!')
    //added a console.log to check that the onload is working
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);

    startTimer();
}

window.onload = setupTimers;