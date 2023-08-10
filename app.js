let tg = window.Telegram.WebApp;

tg.expand();

let protect = document.getElementById("but");
let sign = document.getElementById("form").style.display = "none";

protect.addEventListener('click', () => {
    document.getElementById("item").style.display = "none";
    document.getElementById("form").style.display = "block";
});

const currentUrl = window.location.href;

// Function to extract parameter value from URL
function getParamValue(paramName) {
    const urlParams = new URLSearchParams(currentUrl);
    return urlParams.get(paramName);
}

// Extract param1 value
const param1Value = getParamValue('param1');
const usercardElement = document.getElementById('usercard');

// Clear the content of the usercard element
usercardElement.textContent = '';

// Display the param1 value directly in the usercard element
usercardElement.textContent = param1Value || 'No value';