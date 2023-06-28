import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setValues((prev) => ({ ...prev, userName: e.target.value }));
    } else {
      setValues((prev) => ({ ...prev, password: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues((prev) => ({ ...prev, userName: "", password: "" }));
  };

  return { values, handleChange, handleSubmit };
};
