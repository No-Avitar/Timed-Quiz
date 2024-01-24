let headEl = document.getElementById("header");
let parEl = document.getElementById("par");
let btnEl = document.getElementById("sq");
let timerEl = document.getElementById("timer");
let liEl = document.createElement("li");
liEl.textContent = "strings"
let answersOl = document.getElementById("options")
let timeLeft= 100;

function timercountdown() {
    let timerinterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time : " + timeLeft;
    }, 1000)
}

btnEl.addEventListener("click", function() {
    headEl.textContent = "Question 1"
    parEl.textContent = "Commonly used data types DO NOT include:"
    timercountdown();
    answersOl.setAttribute("style", "font-size: 150%; border-radius: 10px; background-color: blueviolet; color: white; border: 0px; padding: 6px 10px 6px 10px;")
    answersOl.appendChild(liEl)

})