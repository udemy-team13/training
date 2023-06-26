import React from 'react'

//. 이미지
function Background(props){
    const img = props.rand;
    const src = `https://github.com/udemy-team13/training/blob/main/syj/0620/${img}.jpg?raw=true`
    return(
        <>
            <img className="backg" src={src} alt="error"/>
        </>
    )
}


//. 시간대
function Timming(props){
    const d = props.time;
    const hour = String(d.getHours()).padStart(2,'0') + ":";
    const min = String(d.getMinutes()).padStart(2,'0') + ":";
    const sec = String(d.getSeconds()).padStart(2,'0');
    return(
        <>
            <li id="hour">{hour}</li>
            <li id="min">{min}</li>
            <li id="sec">{sec}</li>
        </>
    )
}

export {Background, Timming};