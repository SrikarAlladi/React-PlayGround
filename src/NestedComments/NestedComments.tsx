import React, { useState } from "react";
import { NestedCommentProps } from "./types";
import useCommentTree from "./hooks/useCommentTree";
import { Comment } from "./types";

import "./styles.css";

import CommentComponent from "./Comment.tsx";

const NestedComments: React.FC<NestedCommentProps> = ({
    comments
}) => {

    const [commmentInput, setCommentInput] = useState<string>("");

    const {comments: commentsData,insertComment,editComment,deleteCommentId} = useCommentTree(comments);

    const handleSubmit = (contentId:number) => {
        // Logic 
        if(!commmentInput.trim()){
            alert("Comment cannot be empty!");
            return;
        }
        insertComment(commmentInput,contentId);
        setCommentInput("");

    }

    return (  
        <>
            <div className="new-comment-section">
                <textarea 
                    rows={3} 
                    className="new-comment-input" 
                    placeholder="Add a new comment..."
                    value={commmentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter" && !e.shiftKey){
                            e.preventDefault();
                            handleSubmit(0);
                        }
                    }}
                />
                <button className="add-comment" onClick={() => handleSubmit(0)}>Add Comment</button>
            </div>
            <div className="comments-container">
                {(commentsData).map((comment: Comment) => {
                    return ( 
                        <CommentComponent  {...comment} insertComment={insertComment} editComment = {editComment} deleteCommentId={deleteCommentId} key={comment.id} />
                    )
                })}
                {}
            </div>
        </> 
    )
}

export default NestedComments;