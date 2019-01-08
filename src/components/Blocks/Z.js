import React from 'react';
import styled from 'styled-components';

export const Piece1 = styled.span`    
    position: absolute;
    left: 20%;
    bottom: 60%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const Piece2 = styled.span`
    position: absolute;
    left: 40%;
    bottom: 60%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const Piece3 = styled.span`
    position: absolute;
    left: 60%;
    bottom: 40%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const Piece4 = styled.span`
    position: absolute;
    left: 40%;
    bottom: 40%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const PieceWrapper = styled.div`
    position: relative;
    width: 200px;
`

export const Z = () => (
    <PieceWrapper>
        <Piece1/>
        <Piece2/>
        <Piece3/>
        <Piece4/>
    </PieceWrapper>
)

