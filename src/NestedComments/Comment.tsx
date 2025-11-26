import React, { useState } from 'react';
import { Comment } from './types';

const CommentComponent:React.FC<any> = ({id,votes,content,timestamp,replies,insertComment,editComment,deleteCommentId}) => {
 
    const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
    const [replyInput,setReplyInput] = useState<string>("");

    const [isEditMode,setIsEditMode] = useState<boolean>(false);

    const [editedContent,setEditedContent] = useState<string>(content);

    const handleReply = () => {
        insertComment(replyInput,id);
        setReplyInput("");
    }

    const handleSaveEdit = (id:number,editedContent:string) => {
        // Logic to save edited content 
        if(editedContent && editedContent != content){
            editComment(id,editedContent);
            setIsEditMode(false);
            setEditedContent("");
        }else{
            alert("Content is same as before or empty!");
        }
    }

    const deleteComment = (id:number) => {
        deleteCommentId(id);
    }

     

    return (
        <div className="comment-item" id={`comment-${id}`}>
            {!isEditMode ? (
                <>
                    <p>{content}</p>
                    <p>{"Votes : "}{votes}</p>
                    <p>{(new Date(timestamp).toLocaleString()) }</p>
                    <div className="buttons-section">  
                        <button className="button-item" onClick={() => {setShowReplyBox(!showReplyBox)}} >Reply</button>
                        <button className="button-item" onClick={() => {setIsEditMode(!isEditMode)}} >Edit</button>
                        <button className="button-item" onClick={() => deleteComment(id)}>Delete</button>
                    </div> 
                    {showReplyBox && (
                        <>
                            <div className="new-comment-section">
                                <textarea 
                                rows={3} 
                                className="new-comment-input" 
                                placeholder="Add a new comment..."
                                value={replyInput}
                                onChange={(e) => setReplyInput(e.target.value)}
                                />
                                <button className="add-comment" onClick={handleReply}>Add Reply</button>
                            </div>
                            <div className="replies-section">
                                {(replies.length > 0) && (replies.map((reply: Comment) => {
                                    return (
                                        <CommentComponent  {...reply} insertComment={insertComment} editComment={editComment} deleteCommentId={deleteCommentId} key={reply.id} />
                                    )   
                                }))}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="edit-comment-section">
                    <textarea 
                        rows={3} 
                        className="edit-comment-input" 
                        value={editedContent}
                        onChange={(e) => {setEditedContent(e.target.value)}}
                    />
                    <div className="buttons-section">
                        <button className="button-item" onClick={() => handleSaveEdit(id,editedContent)}>Save</button>
                        <button className="button-item" onClick={() => {setIsEditMode(false)}}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default CommentComponent;