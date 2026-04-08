// visit message using local srorage
const messageElement = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
}
else {
    const timeDifference = now - Number(lastVisit);

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
    }
    else if (daysDifference === 1) {
        message = "You last visited 1 day ago.";
    }
    else {
        message = `You last visited ${daysDifference} days ago.`;
    }
}
messageElement.textContent = message;

setTimeout(() => {
    localStorage.setItem("lastVisit", now);    
}, 1000);
