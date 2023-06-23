//. 환경설정
const root = document.getElementById('root');

//. Block 정의
//! props : section, tag
function Blocksec(props){
    return(
        <div class="block_sec">
            <div class="section">
                <h4>{props.section}</h4>
                <span class="tag">{props.tag}</span> 
            </div>
        </div>
    );
}

function testing(){
    var lis = [{}]
}

//! props : 
/* function createBlockcont(props){
    return(

    )

} */

//. App() 정의
function App(){
    return(
        <Blocksec section={"제목"} tag={"R"}></Blocksec>
    );
}

//. Rendering
ReactDOM.render(<App />, root);