function background() {
  const images = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg",
    "./assets/6.jpg",
    "./assets/7.jpg",
  ];

  let getImage = Math.floor(Math.random() * images.length);
  let bgImage = images[getImage];
  document.body.style.backgroundImage = `url(${bgImage})`;
}

setInterval(background, 2000);

function watch() {
  let getDate = new Date();

  var hours = ("0" + getDate.getHours()).slice(-2);
  var minutes = ("0" + getDate.getMinutes()).slice(-2);
  var seconds = ("0" + getDate.getSeconds()).slice(-2);

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.querySelector(".watch").innerHTML = timeString;
}
setInterval(() => {
  watch();
}, 100);

function greeting(event) {
  event.preventDefault();

  let name = document.querySelector(".input_name").value;

  const removeInput = event.target;
  removeInput.remove();

  let greeting = document.createElement("h2");
  greeting.innerHTML = `Hello, ${name}!`;
  document.querySelector(".greeting").append(greeting);
}
