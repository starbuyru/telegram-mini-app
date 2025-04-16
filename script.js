const tg = window.Telegram.WebApp;

tg.expand(); // делает Mini App на весь экран

document.getElementById("main-button").addEventListener("click", () => {
  tg.sendData("Привет от Mini App!"); // отправка данных в бота
});
