import { useState } from "react";
import { useNavigate } from "react-router-dom";


const About = () => {  
  const navigate = useNavigate();
  const [search, setSearch] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${search}`);
  }

  const onChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>About</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={search} onChange={onChange} placeholder="여행가고싶은지역" />
        <button type="submit">가즈아</button>
      </form>
    </div>
  )
}

export default About;