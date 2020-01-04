import React from 'react';

import Square from './Square';

const Board = ({ boardState, placeMarker }) => {
    // Create board squares
    const board = boardState.map((square, i) => <Square key={i} value={boardState[i]} onClick={() => placeMarker(i)}/>)

    

    return (
        <div className="game-board">
            <div className="board">
                {board}
            </div>
        </div>
    );
}

export default Board;
