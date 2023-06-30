// import logo from './logo.svg';
// import './App.css';
import UseCount from './components/usecount'
import LoginForm from './components/loginForm'

function App() {
  const params = new URLSearchParams('?a=aaa&b=bbb');
  console.log(params);

  return (
    <div className="App">
      <UseCount />
      <LoginForm />
    </div>
  );
}

export default App;
