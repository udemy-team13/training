/* const root = document.getElementById('root')
function Counter(){
//!useState로 count를 0으로 초기화
const [count, setCount] = React.useState(0);
return(
        <div>
            <p>카운트 : {count}</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>   
    )
} */
let a =0;
const root = document.getElementById('root')
const h1 = React.createElement('h1', {id : "h1", style:{color:"blue"}},"Total clicks: {a}")
const button = React.createElement('button', {onClick:()=>{
    a = a+1
}},"Click me");
const container = React.createElement("div", null, [h1, button]);

//. container 안의 div, button을 root에 렌더링
ReactDOM.render(container,root);