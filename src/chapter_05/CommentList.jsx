import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "우정호",
        comments : "안녕하세요, 소플입니다.",
    },
    {
        name : "우정희",
        comments : "안녕하세요 ^^",
    },
    {
        name : "우정호",
        comments : "누구쎄용?",
    }
];

function CommentList(props){
    return (
        <div>
            {comments.map((a)=>{
                return(
                    <Comment name={a.name} comment={a.comments}></Comment>
                )
            })}
        </div>
    )
}

export default CommentList;