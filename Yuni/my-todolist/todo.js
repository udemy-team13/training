function todo(event) {
  event.preventDefault();

  let getTodo = document.querySelector(".input_todo").value;
  let addTodo = document.createElement("li");
  addTodo.classList.add("todo-list");
  addTodo.innerHTML = `<div>${getTodo}<button>🗑️</button></div>`;

  document.querySelector(".todoWrapper").append(addTodo);

  event.target.children[0].value = "";
}
