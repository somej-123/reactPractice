import React,{useEffect, useState} from "react";

function Practice1(props){
    const [count, setCount] = useState(0);

    //componentDidMount, componentDidUpdate와 비슷하게 작동
    useEffect(()=>{
        console.log("시점")
        //브라우저 API를 사용해서 document의 title을 업데이트
        document.title = `총 ${count}번 클릭했습니다.`;
    })
    console.log("시점2");
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=> setCount(count+1)}>
                클릭    
            </button>
        </div>
    )
}

export default Practice1;