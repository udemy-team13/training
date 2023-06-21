function background() {
  const images = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg",
    "./assets/6.jpg",
  ];

  let getImage = Math.floor(Math.random() * images.length);
  let bgImage = images[getImage];
  document.body.style.backgroundImage = `url(${bgImage})`;
}
background();
