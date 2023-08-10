let tg = window.Telegram.WebApp;

tg.expand();

let protect = document.getElementById("but");
let sign = document.getElementById("form").style.display = "none";

protect.addEventListener('click', () => {
    document.getElementById("item").style.display = "none";
    document.getElementById("form").style.display = "block";
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.platform}`;

usercard.appendChild(p);