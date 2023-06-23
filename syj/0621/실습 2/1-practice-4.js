//. 환경설정
const root = document.getElementById('root');
// props : url, 검색 내용, corp

//. Searchblock 정의
function Searchblock(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>
                <form action={props.url} method="post" target="_self">
                    <label for="keyword">{props.label}</label> 
                    <input type="text" name="keyword" id="keyword" />
                    <input type="submit" />
                    <small>{props.corp}</small>     
                </form>
            </p>
        </div>
    );
}

//. App() 정의
function App(){
    const titl = "가고싶은 여행지를 검색해봐요!"
    const url = "https://www.goodchoice.kr/product/result"
    const lab = "가고싶은 도시: "
    const corp = "®여기어때"

    return(<Searchblock title={titl} url={url} label={lab} corp={corp}></Searchblock>);
}

//. Rendering
ReactDOM.render(<App />, root);