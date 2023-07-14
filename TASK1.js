//Problem 1: delayed message

delayedMessage = message => {
    setTimeout(() => {
        console.log(`This ${message} will be logged after 2 seconds`);
    }, 2000);
}
delayedMessage("delayed message");


