import React, { useState } from 'react'
import styled from 'styled-components'
import CheckerboardRow from './CheckerboardRow'

const Board = styled.div`
height: 800px;
width: 800px;
border: 1px solid black;
display: flex;
flex-direction: column;
`

const [r, c] = [8, 8];
const m = Array(r).fill().map(() => Array(c).fill(0));

const isWhite = i => i === 0 || i === 1 || i === 2
const doesHavePiece = i => i === 0 || i === 1 || i === 2 || i === 5 || i === 6 || i === 7

const pieceState = m.map((row, i) => row.map((column, j) => ({ hasPiece: doesHavePiece(i) && j % 2 === i % 2, pieceColor: isWhite(i) })))

const initialState = { pieceState, selectedPiece: {}, validMoves: [] }



const Checkerboard = () => {
    const [gameState, setGameState] = useState(initialState)
    console.log(gameState)
    return (
        <Board>
            {gameState.pieceState.map((row, i) => <CheckerboardRow row={row}
                startingColor={i % 2 === 0} rowNumber={i} setGameState={setGameState} gameState={gameState} />)}
        </Board>
    )
}

export default Checkerboard