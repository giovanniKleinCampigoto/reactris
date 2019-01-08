import React, { Component } from 'react';

import styled from 'styled-components'


const StyledNextPieceBox = styled.div`
    position: absolute;
    left: 40px;
    top: 210px;
    width: 200px;
    height: 200px;
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
    state = {  }
    render() {
        return (
        <StyledNextPieceBox>
            <NextPieceText>Next</NextPieceText>
            <NextPieceWrapper>{this.props.piece}</NextPieceWrapper>
        </StyledNextPieceBox> 
        );
    }
}

export default NextPieceBox