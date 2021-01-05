import React from "react";

type GreetingsProps={
    name:string;
    optional?:boolean;
    onClick:(name:string)=>void; //아무것도 리턴하지 않는 함수
}

const Greetings=({name, optional, onClick}:GreetingsProps)=>{
    return (
        <>
            <div>Hello, {name}</div>
            {optional && <p>1</p>}
            <button onClick={()=>onClick(name)}>Click Me</button>
        </>
    )
}

// App에서 함수내용 작성해서 props로 전달
// Greetings에서 name을 담아서 App을 전달

export default Greetings;