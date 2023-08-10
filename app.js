let tg = window.Telegram.WebApp;

tg.expand();

let protect = document.getElementById("but");
let sign = document.getElementById("form").style.display = "none";

protect.addEventListener('click', () => {
    document.getElementById("item").style.display = "none";
    document.getElementById("form").style.display = "block";
});

const urlParams = new URLSearchParams(window.location.search);

// Get the 'param1' value
const param1 = urlParams.get('param1');

// Select the <div> element
const usercard = document.getElementById('usercard');

// Set the innerHTML to the param1 value
usercard.innerHTML = param1;