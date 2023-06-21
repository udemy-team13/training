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
