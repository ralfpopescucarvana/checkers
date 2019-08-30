import React from 'react'
import styled from 'styled-components'
import Tile from '../Tile'

const Row = styled.div`
display: flex;
flex-direction: row;
flex-grow: 1;
`

const CheckerboardRow = ({ startingColor, row, rowNumber, setGameState, gameState }) => {
    const modulo = startingColor ? 1 : 0
    return (<Row>
        {row.map((tile, i) => <Tile hasPiece={tile.hasPiece} setGameState={setGameState} gameState={gameState}
            pieceColor={tile.pieceColor} startingColor={i % 2 === modulo} rowNumber={rowNumber}
            columnNumber={i} />)}
    </Row>)
}

export default CheckerboardRow
