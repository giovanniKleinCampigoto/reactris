import React, { Component } from 'react';
import styled from 'styled-components'

const GameBlock = styled.span`
    display: block;
    width: 25px;
    height: 25px;
    border: 1px solid white;
    border-radius: 5px;
    `
    
const Cell = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 40px;
    height: 40px;
`

const Line = styled.div`
    display: flex;
    width: 100%;
`

const INITIAL_STATE = {
    initialGameState: Array(18).fill('x').map(()=>Array(18).fill('x'))
}

class Game extends Component {
    state = INITIAL_STATE
    
    renderGameGrid () {
        let gameMatrix = this.state.initialGameState
        return gameMatrix.map((line, lineIndex) => (        
            <Line key={lineIndex}>
                {
                    line.map((block, index) => (
                        <Cell key={`${line}, ${index}`}>{block}</Cell>
                    ))
                }
            </Line>
        ))
    }
    render() {
        return (
            <div>{this.renderGameGrid()}</div>
        );
    }
}

export default Game