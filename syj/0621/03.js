//. 컴포넌트 생성
const root = document.getElementById('root');
function MyComponent(props){
return ReactDOM.render(React.createElement("h1",null,`hello! ${props.name}`);
}
ReactDOM.render(React.createElement(MyComponent, {name : "홍길동"}),root);

//ReactDOM.render(React.createElement(MyComponent),root);

//:babel type
/* const root = document.getElementById('root');

function MyComponent(){
return React.createElement('h1',null,'hello!')}
 */

//. prop 주기
function Greeting(name){
    return React.createElement("h2", null, `안녕하세요, ${props.name}!`);
}

//ReactDOM.render(<MyComponent />,root);
