function chat(event) {
  event.preventDefault();

  let getUser = document.querySelectorAll("input")[0].value;
  let getMessage = document.querySelectorAll("input")[1].value;

  let chat = document.createElement("div");
  chat.classList.add("chatting");
  chat.innerHTML = `<span style='font-weight: bold'>${getUser}: </span> <span class=message>${getMessage}</span>`;

  document.querySelector(".chatting").append(chat);

  event.target.children[0].value = "";
  event.target.children[1].value = "";
  event.target.children[0].focus();
}
