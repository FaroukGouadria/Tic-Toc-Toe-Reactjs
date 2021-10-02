import React,{ useState } from 'react'
import "./ticToc.css";

const TicToc = () => {
    
    const[turn,setTurn]= useState("X");
    const [cells,setCells]=useState(Array(9).fill(''));
    const[winner,setWinner]= useState();
    const handleForWinner =(squares)=>{
     let combos ={
        across:[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ],
        down:[
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ],
        diagnol:[
            [0, 4, 8],
            [6, 4, 2],
        ],
    };
    for(let combo in combos){
        combos[combo].forEach((element) => {    
                if(
                    squares[element[0]]===""||
                    squares[element[1]]===""||
                    squares[element[2]]===""
                ){

                }
                else if (
                    squares[element[0]]===squares[element[1]] && squares[element[1]]===squares[element[2]])
                    {
                        setWinner(squares[element[0]]);
                    }
                
            
        });
    }
    };
    const handleClick=(num)=>{
        if(cells[num] !==''){
            alert('already clicked');
            return;
        };
        let squares =[...cells];
        if(turn === "X"){
            squares[num]="X";
            setTurn('O');
        }else{
            squares[num]="O";
            setTurn('X');
        }
        handleForWinner(squares);
        setCells(squares);
    }
    const Cell = ({num}) =>{
        return <td onClick={()=>handleClick(num)}>{cells[num]}</td>;
        
    };

    const handleRestart =()=>{
        setCells(Array(9).fill(''));
        setWinner(null);
    }

    return (
        <div className="inf">
        <div className="container">
            <h1 className="turn">
                turn:{turn}
            </h1> 
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                    <p className="winner">{winner} is the winner !</p>
                    
                </>
            )}
            <button className="btn" onClick={()=>handleRestart()}>Play Again</button> 
        </div>
        </div>
    )
}

export default TicToc;
