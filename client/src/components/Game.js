import React, { useState } from 'react';

import Board from './Board';

const Game = () => {
    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [history, setHistory] = useState([boardState]);
    const [xIsNext, setIsNext] = useState(true);

    const nhistory = history;

    // Function to update squares sate and players' turn
    const placeMarker = (i) => {
        const nsquares = boardState.slice();
        if (checkForWinner(nsquares) || nsquares[i]) {
            return;
        }
        nsquares[i] = xIsNext ? 'X' : 'O';
        setBoardState(nsquares)
        setHistory([...history, boardState])
        setIsNext(prevIsNext => !prevIsNext);
    }

    console.log('history', nhistory)
    console.log('history', nhistory.length - 1)
    console.log('history', nhistory[0])
    console.log('boardState', boardState)

    // Check if somebody has won
    const checkForWinner = (squares) => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const winner = checkForWinner(boardState);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game">
            <Board
                boardState={boardState}
                placeMarker={placeMarker}
            />
            <div className="game-info">
                <div>{status}</div>
            </div>
        </div>
    );
}

export default Game;
