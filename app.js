let tg = window.Telegram.WebApp;

tg.expand();

let protect = document.getElementById("but");
let sign = document.getElementById("form").style.display = "none";

protect.addEventListener('click', () => {
    document.getElementById("item").style.display = "none";
    document.getElementById("form").style.display = "block";
});

// Get the current URL
const currentUrl = window.location.href;

// Function to extract parameter value from URL
function getParamValue(paramName) {
    const urlParams = new URLSearchParams(currentUrl);
    return urlParams.get(paramName);
}

// Extract and display param1 value
const param1Value = getParamValue('param1');
const usercardElement = document.getElementById('usercard');

// Create a paragraph element to display the param1 value
const paramValueElement = document.createElement('p');
paramValueElement.textContent = `Param1 Value: ${param1Value}`;

// Append the paragraph element to the usercard element
usercardElement.appendChild(paramValueElement);