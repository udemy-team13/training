function handleName(event) {
  event.preventDefault();
  if (event.target.children[0].value === "") return;
  // 입력후 Input태그 제거
  const removeInput = event.target;
  removeInput.remove();

  // h1태그 생성후 텍스트넣기
  const greeting = document.createElement("h1");
  greeting.innerText = `안녕하세요 ${event.target.children[0].value}님 !`;
  document.querySelector(".greeting").append(greeting);
}
