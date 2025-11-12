import { useCallback, useEffect, useState } from "react";
import "./TicTacToe.css"

const TicTacToe = () => {


    const [board,setBoard] = useState(Array(9).fill(null))
    const [user,setUser] = useState(true);
    const [winner,setWinner] = useState("");
    const [active,setActive] = useState(true);

    const handleClick = (index) => {
        console.log(index)
        
        if(active){
            if(board[index] == null){
                setBoard((prev) => {  
                    const newBoard = [...prev]
                    newBoard[index] = user ? "X" : "O" ;
                    return newBoard;
                })
                setUser(!user)
            }
        }
    }

    const resArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    useEffect(() => { 

        for(let x of resArr){
            if(board[x[0]] &&  (board[x[0]] == board[x[1]]) && (board[x[1]] == board[x[2]])){
                setWinner(board[x[0]])
                setActive(false) 
                break;
            }
        }

        if(!board.includes(null)){
            setActive(false)
        }
 
    },[board,winner]) 

    return ( 
        (active ? (
            <>
                <div className="turn"> 
                    {`${user ? "X" : "O"} 's Turn`}
                </div>
                <div className="mainGrid">               
                    {board.map((x, index) => {
                        return (
                            <div className="boardElement" key={index} onClick={() => handleClick(index)} > 
                            {x}
                            </div>
                        );
                    })}
                </div>
            </>
        ) : ( 
            ((board.includes(null)) ? (
                <span>{`${winner} Won The Game`}</span>
            ):(
                <span>{"Match Ended as Draw"}</span>
            ))
        ))
    )

}

export default TicTacToe;