setInterval(() => {
  const randomNum = Math.ceil(Math.random() * 5);
  document.querySelector(
    ".wrapper"
  ).style.backgroundImage = `url(./img/${randomNum}.jpg)`;
}, 60000);
