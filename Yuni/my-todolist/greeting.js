function greeting(event) {
  event.preventDefault();

  let name = document.querySelector(".input_name").value;

  const removeInput = event.target;
  removeInput.remove();

  let greeting = document.createElement("h2");
  greeting.innerHTML = `Hello, ${name}!`;
  document.querySelector(".greeting").append(greeting);

  document.querySelector(".input_todo").style.display = "block";
}
