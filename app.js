// Вызов объекта телеграм WebApp
let tg = window.Telegram.WebApp;

// Раскрыть окно на полный экран мобильника
tg.expand();

// Объекты сайта
let mainButton = document.getElementById("but");
let signForm = document.getElementById("form");
let signUpButton = document.getElementById('sign')
signForm.style.display = "none";
const botToken = "6559961659:AAHWQ_hoxUmnhwhUWIDcXxLJR6KwhyeYoDw";
const chatId = tg.initDataUnsafe.user.id;

//id сессии для отправки сообщений из webApp в телеграм
let query_id = tg.initDataUnsafe.query_id;

// Что произойдёт при нажатии на первую кнопку
mainButton.addEventListener('click', () => {
    let container = document.querySelector(".container");
    container.style.display = "none";
    signForm.style.display = "block";
    // Перехват имени и фамилии пользователя и подстановка в поле формы
    document.getElementById('user_name').value = `${tg.initDataUnsafe.user.first_name}` + " " + `${tg.initDataUnsafe.user.last_name}`;
    document.getElementById('phone_number').value = `${tg.initDataUnsafe.user.id}`;
});

// Что произойдёт при нажатии на вторую кнопку
signUpButton.addEventListener('click', () => {
    event.preventDefault();
    // Очищаем данные ошибок
    document.getElementById("error").innerText = '';

    // Забираем значения
    let name = document.getElementById('user_name').value;
    let phone = document.getElementById('phone_number').value;

    // Проверка введённых данных
    if (phone.trim() === '')  {
        document.getElementById("error").innerText = "Please enter you phone";
        return;
    }

    //Создаём массив данных из полученных данных
    let data = {
        name: name,
        phone: phone
    };

    /*
    Отправляем данные обратно в Telegram

    Если использовать только эту функцию, то он что-то передаёт в бот, но пишет сообщение
    что 'Data from the "Посмотреть сообщение" button was transferred to the bot.'
    Но деталей, что это за сообщение - не показывает.
    */
    // tg.sendData(JSON.stringify(data));

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        chat_id: chatId,
        text: "Завершение работы",
    })
    });


    // Закрываем сайт
    tg.close()
});


// Перехват 'param1' из параметров ссылки и подстановка в сайт
const urlParams = new URLSearchParams(window.location.search);
const param1 = urlParams.get('param1');
const alienMessageElement = document.querySelector('.alien_message');
alienMessageElement.textContent = param1;