import React from "react";
const styles = {
    wrapper : {
        padding :16,
        display : "flex",
        flexDirection : "row",
        borderBottom : "1px solid grey",
    },
    greetring : {
        marginRight : 8,
    },
};

function Toolbar(props){
    const { isLoggedIn, OnClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greetring}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) :(
                <button onClick={OnClickLogin}>로그인</button>
            )}
        </div>
    )
}
export default Toolbar;