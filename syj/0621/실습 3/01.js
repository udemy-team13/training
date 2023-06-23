//. 루트 설정
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

const root = document.getElementById('root');


//. 컴포넌트 종합
function App(){
    //_State 설정
    let [mode, setMode] = React.useState(0);
    if (mode =="change"){
        let imgUrl=getRandomInt(1,7);
        let url = `${imgUrl}.jpg`;

        //_이미지 랜덤 추출
        content = <img src={{url}} />
    }
    return(

        //_클릭 시 State 변경 및 Imagechange 재실행
        <div onClick ="{()=>{
            setMode('change');
        }}">
            {content}
        </div>
    );
}

//. 최종 실행
ReactDOM.render(App(),root);

