// Попытка принудительной очистки кэша при открытии сайта
window.onload = function() {
  if (window.performance && window.performance.clearResourceTimings) {
    window.performance.clearResourceTimings();
  }
  if (window.performance && window.performance.clearMeasures) {
    window.performance.clearMeasures();
  }
  if (window.performance && window.performance.clearMarks) {
    window.performance.clearMarks();
  }
  if (window.caches) {
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name);
      }
    });
  }
};

// Вызов объекта телеграм WebApp
let tg = window.Telegram.WebApp;

// Раскрыть окно на полный экран мобильника
tg.expand();

// Объекты сайта
let mainButton = document.getElementById("but");
let signForm = document.getElementById("form");
let signUpButton = document.getElementById('sign')
signForm.style.display = "none";

// Что произойдёт при нажатии на первую кнопку
mainButton.addEventListener('click', () => {
    let container = document.querySelector(".container");
    container.style.display = "none";
    signForm.style.display = "block";
    // Перехват имени и фамилии пользователя и подстановка в поле формы
    document.getElementById('user_name').value = `${tg.initDataUnsafe.user.first_name}` + " " + `${tg.initDataUnsafe.user.last_name}`;
    document.getElementById('phone_number').value = `${tg.initDataUnsafe.query_id}`
});

// Что произойдёт при нажатии на вторую кнопку
signUpButton.addEventListener('click', () => {
    // Очищаем данные ошибок
    document.getElementById("error").InnerText = '';

    // Забираем значения
    let name = document.getElementById('user_name').value;
    let phone = document.getElementById('phone_number').value;

    // Проверка введённых данных
    if(phone.length < 1) {
        document.getElementById("error").InnerText = "Please enter you phone";
        return;
    };

    // Создаём массив данных из полученных данных
    let data = {
        name: name,
        phone: phone
    }

    /*
    Отправляем данные обратно в Telegram

    Если использовать только эту функцию, то он что-то передаёт в бот, но пишет сообщение
    что 'Data from the "Посмотреть сообщение" button was transferred to the bot.'
    Но деталей, что это за сообщение - не показывает.
    */
    tg.sendData(JSON.stringify(data));

    // Закрываем сайт
    tg.close()
});


// Перехват 'param1' из параметров ссылки и подстановка в сайт
const urlParams = new URLSearchParams(window.location.search);
const param1 = urlParams.get('param1');
const alienMessageElement = document.querySelector('.alien_message');
alienMessageElement.textContent = param1;