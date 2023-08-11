let tg = window.Telegram.WebApp;

tg.expand();

let mainButton = document.getElementById("but");
let signForm = document.getElementById("form");
signForm.style.display = "none";

mainButton.addEventListener('click', () => {
    let container = document.querySelector(".container");
    container.style.display = "none";
    signForm.style.display = "block";
    document.getElementById('user_name').value = `${tg.initDataUnsafe.user.first_name}`;
});

const urlParams = new URLSearchParams(window.location.search);

// Get the 'param1' value
const param1 = urlParams.get('param1');

// Select the existing <p> element with the class "alien_message"
const alienMessageElement = document.querySelector('.alien_message');

// Update the text content of the <p> element
alienMessageElement.textContent = param1;