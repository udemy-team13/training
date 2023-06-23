// import logo from './logo.svg';
// import './App.css';

import Practice01 from 'components/01';
import Practice02 from 'components/02';
import Practice03 from 'components/03';
import Practice04 from 'components/04';
import { Auth, TodoList, RandomGen, ImageSlide } from 'components/TeamPractice';

function App() {
  return (
    <div>
      <h1>this is Friday!</h1>
      <Practice01 />
      <Practice02 />
      <Practice03 name="홍길동" />
      <Practice04 />
      <hr />
      <Auth />
      <hr />
      <TodoList />
      <hr />
      <RandomGen />
      <hr />
      <ImageSlide />
    </div>
  );
}

export default App;
