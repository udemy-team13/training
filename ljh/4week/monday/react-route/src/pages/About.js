import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <>
      <h1>About</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="여행가고 싶은 지역"
          type="text"
          value={search}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
}
