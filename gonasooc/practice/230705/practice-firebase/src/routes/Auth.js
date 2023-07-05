import React, { useState, useEffect } from "react";
import auth, {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../fConfig";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnToggle, setBtnToggle] = useState(false);
  const [loginState, setLoginState] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoginState(true);
      } else {
        setLoginState(false);
      }
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (btnToggle) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => {
            onChange(event);
          }}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            onChange(event);
          }}
          required
        />
        <input type="submit" value="회원가입" />
      </form>
    </>
  );
}
