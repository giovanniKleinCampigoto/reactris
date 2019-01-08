import React, { Component } from 'react';

import styled from 'styled-components'

import { L, T, Z, Square, I } from '../../Blocks'


const StyledNextPieceBox = styled.div`
    position: absolute;
    left: 40px;
    top: 210px;
    width: 200px;
    height: 250px;
    color: white;
    font-weight: bold;
    background: #454c59;
`

const NextPieceText = styled.span`
    display: block;
    margin-top: 10px;
    color: white;
    font-size: 1em;
`

const NextPieceWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;  
    margin-top: 15px;
`

class NextPieceBox extends Component {
    state = { 
        currentBlock: undefined,
        blocks: [<L/>, <T/>, <Z/>, <Square/>, <I/>]
    }

    componentDidMount() {
        this.generateRandomNextPiece()
    }

    generateRandomNextPiece () {
        setInterval(() => this.throwDice(), 1000)
    }

    throwDice () {
        this.setState({
            currentBlock: this.state.blocks[Math.floor(Math.random() * 5)]
        }, () => console.log(Math.floor(Math.random() * 5)))
    }
    render() {
        return (
        <StyledNextPieceBox>
            <NextPieceText>Next</NextPieceText>
            <NextPieceWrapper>{this.state.currentBlock}</NextPieceWrapper>
        </StyledNextPieceBox> 
        );
    }
}

export default NextPieceBox