import React from 'react';
import styled from 'styled-components'
import { L } from '../../Blocks/L'

const StyledScoreBox = styled.div`
    position: absolute;
    left: 40px;
    width: 200px;
    height: 100px;
    color: white;
    font-weight: bold;
    background: #454c59;
`

const Score = styled.span`
    display: block;
    margin-top: 10px;
    color: white;
    font-size: 3em;
`

export const ScoreBox = props => (
    <StyledScoreBox>
        <span>Score</span>
        <Score>{props.score}</Score>
    </StyledScoreBox>
)
