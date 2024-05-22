import React, {useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfrimed] = useState(false);

    const handleConfirm = () =>{
        setIsConfrimed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인하기" : "확인됨"}
        </button>
    )
}

export default ConfirmButton;