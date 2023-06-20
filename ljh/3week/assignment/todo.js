function handleTodo(event) {
  event.preventDefault();
  if (event.target.children[0].value === "") return;
  if (document.querySelector(".todo-wrapper").children.length > 6) {
    return alert("할 일 목록은 7개까지 가능합니다.");
  }

  // 태그생성후 리스트에 넣기
  const todo = document.createElement("li");
  todo.innerHTML = `
  <button class="delete-btn" onclick="handleDelete(event)">🗑️</button>
  <span>${event.target.children[0].value}</span>  
    `;
  document.querySelector(".todo-wrapper").append(todo);

  // 목록생성후 input 안의 텍스트 리셋
  event.target.children[0].value = "";
}

function handleDelete(event) {
  const element = event.target.parentNode;
  element.remove();
}
