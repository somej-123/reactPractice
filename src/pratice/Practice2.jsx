import React, { useState } from "react";

function NameForm(props){
    const [value, setValue] = useState("");

    const handleChange = (event) =>{
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항 : ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요 :
                <select value={value} onChange={handleChange}>
                    <option value='apple'>사과</option>
                    <option value='banana'>바나나</option>
                    <option value='grape'>포도</option>
                    <option value='watermelon'>수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default NameForm;