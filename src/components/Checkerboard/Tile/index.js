import React from 'react'
import styled from 'styled-components'
import Piece from '../Piece'

const TileDiv = styled.div`
background-color: ${props => props.startingColor ? 'black' : 'grey'}
flex-grow: 1;
justify-content: center;
align-items: center;
border: 3px solid ${props => props.isSelected ? 'red' : 'black'}
opacity: ${props => props.isValidMove ? '0.5' : '1'}
cursor: ${props => props.isValidMove ? 'pointer' : ''};
`

const calculateValidMoves = (selectedPiece, gameState) => {
    const { rowNumber, columnNumber, color } = selectedPiece
    const rowDelta = color ? 1 : -1
    const validColumns = [columnNumber - 1, columnNumber + 1]
    const validMoves = []
    if (validColumns[0] >= 0) {
        validMoves.push({ row: rowNumber + rowDelta, column: validColumns[0] })
    }
    if (validColumns[1] <= 7) {
        validMoves.push({ row: rowNumber + rowDelta, column: validColumns[1] })
    }
    return validMoves
}

const onClick = (setGameState, gameState, rowNumber, columnNumber, color) => () => {
    setGameState({
        pieceState: gameState.pieceState, selectedPiece: { rowNumber, columnNumber, color },
        validMoves: calculateValidMoves({ rowNumber, columnNumber, color }, gameState)
    })
}

const calculateIfValidMove = (validMoves, rowNumber, columnNumber) => (
    validMoves.map(move => move.row === rowNumber && move.column === columnNumber).reduce((acc, curr) => (acc || curr), false)
)

const Tile = ({ startingColor, hasPiece, pieceColor, rowNumber, columnNumber, gameState, setGameState }) => (
    <TileDiv startingColor={startingColor} isSelected={rowNumber === gameState.selectedPiece.rowNumber &&
        columnNumber === gameState.selectedPiece.columnNumber} isValidMove={calculateIfValidMove(gameState.validMoves, rowNumber, columnNumber)}>
        <Piece pieceColor={pieceColor} hasPiece={hasPiece} onClick={onClick(setGameState, gameState, rowNumber, columnNumber, pieceColor)} />
    </TileDiv>)

export default Tile