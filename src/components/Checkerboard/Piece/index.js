import styled from 'styled-components'
import React from 'react'

const Circle = styled.div`
background: ${props => props.pieceColor ? 'black' : 'white'}
border: 2px solid white;
border-radius: 50%;
width: 80%;
height: 80%;
display: ${props => props.hasPiece ? 'block' : 'none'}
cursor: pointer;

:hover {
    opacity: .5;
}
`

const Piece = (props) => <Circle {...props} />

export default Piece