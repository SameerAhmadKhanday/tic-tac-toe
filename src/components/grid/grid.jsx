import { useState } from "react";
import Card from "../card/card";
import isWinner from "../../helpers/checkWinner";

function Grid({numberOfCards }){
    const [board , setBoard] = useState(Array(numberOfCards).fill(""));
    const[turn ,setTurn] = useState(true);
    const[winner , setWinner] = useState(null);

    function play(index){
        if (turn == true) {
            board[index] = "O";
        }else{
            board[index] = "X";
        }
        const win =isWinner(board , turn ? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset() {
        setTurn(true);
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))
    }
    return(
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">winner is {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">current turn is : {(turn) ? 'O' : 'X'}</h1>
            <div className="grid"> 
                {board.map((el,idx) => <Card gameEnd={winner ? true : false}  key={idx}  onPlay={play}  player={el} index ={idx}  /> )}
            </div>
        </div>
       
    )

}

export default Grid;

// In summary, this return statement creates a grid-like structure where each cell is represented by a Card component.
//  The number of Card components rendered is determined by the length of the board array, and each Card component is given a unique key attribute to help React efficiently identify and manage them.
// Yes, that's correct! The board.map() function is iterating over each element in the board array, and for each element, 
// it creates a corresponding Card component. So, each element in the board array is indeed being converted into a Card component.

// +++++++++++  about fill
// The fill("") method is used to initialize each element of the array with an empty string "". In the context of a tic-tac-toe game, the board array represents the grid where each cell can be either empty, "X", or "O".

// Using fill("") ensures that each cell in the grid starts as empty, indicating that no player has made a move yet. Later on, when a player makes a move (placing either "X" or "O"), the corresponding cell in the board array will be updated accordingly.