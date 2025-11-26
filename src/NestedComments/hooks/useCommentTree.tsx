import { useState } from "react";
import { Comment } from "../types";

const useCommentTree = (content: Comment[]) => {

    const [comments,setComments] = useState<Comment[]>(content);

    const insertNode = (nodes: Comment[], targetId: number, newNode: Comment): Comment[] => {
        return nodes.map(node => {
            if(node.id === targetId){
                return {
                    ...node,
                    replies: [newNode, ...node.replies]
                }
            }else if(node.replies.length > 0){
                return {
                    ...node,
                    replies: insertNode(node.replies, targetId, newNode)
                }
            }else{
                return node;
            }
        })
    }

    const insertComment = (content: string,contentId:number) => {
        // Logic to add new comment 
        const newComment: Comment = {
            id: Date.now(),
            content: content,
            votes: 0,
            timestamp: new Date().toISOString(),
            replies: []
        };
        if(contentId){
            setComments(prevComments => {
               return insertNode(prevComments,contentId,newComment);
            });
        }else{ 
            setComments(prevComments => {
                return [newComment,...prevComments];
            })
        }
    }

    const insertEditedComment = (nodes: Comment[], targetId: number, newContent: string): Comment[] => {
        return (nodes.map((node) => {
            if(node.id === targetId){
                return {
                    ...node,
                    content: newContent,
                    timestamp: new Date().toISOString()
                }
            }else if(node.replies.length > 0){
                return {
                    ...node,
                    replies: insertEditedComment(node.replies,targetId,newContent)
                }
            }else{
                return node;
            }
        }))
    }

    const editComment = (contentId:number,newContent:string) => {
        setComments((prevComments) => {
             return insertEditedComment(prevComments,contentId,newContent);
        });
    }

    const deleteCommentWithId = (nodes: Comment[], targetId: number): Comment[] => {
        return nodes.reduce((acc: Comment[], node) => {
            if(node.id === targetId){
                return acc; // Skip the node to be deleted
            }else if(node.replies.length > 0){
                return [
                    ...acc,
                    {
                        ...node,
                        replies: deleteCommentWithId(node.replies, targetId)
                    }
                ]
            }else{
                return [...acc, node];
            }
        }, []);
    }

    const deleteCommentId = (targetId:number) => {
        setComments((preveComments) => {
            return deleteCommentWithId(preveComments,targetId);
        }) 
    }

    return {
        comments,
        insertComment,
        editComment,
        deleteCommentId
    }
}

export default useCommentTree;