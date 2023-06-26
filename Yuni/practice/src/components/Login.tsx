import React, { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    if (id === "admin" && password === "password") {
      alert("로그인성공!");
    } else {
      alert("로그인실패!");
    }
  };
  return (
    <>
      <form>
        <div>
          <input
            style={{
              width: "140px",
              height: "30px",
              border: "1px solid navy",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
            type="text"
            name="id"
            value={id}
            placeholder="ID를 입력하세요."
            onChange={onChangeId}
          ></input>
        </div>
        <div>
          <input
            style={{
              width: "140px",
              height: "30px",
              border: "1px solid navy",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            onChange={onChangePassword}
          ></input>
        </div>
        <button
          style={{
            width: "140px",
            height: "30px",
            border: "1px solid navy",
            backgroundColor: "navy",
            padding: 0,
            color: "white",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
