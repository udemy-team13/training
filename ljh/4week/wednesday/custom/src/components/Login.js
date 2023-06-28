import { useForm } from "../hooks/formHook";

export default function Login() {
  const { values, handleChange, handleSubmit } = useForm({
    userName: "",
    password: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.userName}
        onChange={handleChange}
        type="email"
        placeholder="ex) xxx@aaaa.com"
      />
      <input
        value={values.password}
        type="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">로그인</button>
    </form>
  );
}
