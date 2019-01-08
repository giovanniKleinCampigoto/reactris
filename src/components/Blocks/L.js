import React from 'react';
import styled from 'styled-components';

export const UpperPiece1 = styled.span`
    position: absolute;
    left: 30%;
    bottom: 65%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const UpperPiece2 = styled.span`
    position: absolute;
    left: 30%;
    bottom: 45%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const UpperPiece3 = styled.span`
    position: absolute;
    left: 30%;
    bottom: 25%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const BottomPiece1 = styled.span`
    position: absolute;
    left: 50%;
    bottom: 25%;
    width:  34px;
    height: 34px;
    border-radius: 5px;
    border: 3px white solid;
`

export const PieceWrapper = styled.div`
    position: relative;
    width: 200px;
`

export const L = () => (
    <PieceWrapper>
        <UpperPiece1/>
        <UpperPiece2/>
        <UpperPiece3/>
        <BottomPiece1/>
    </PieceWrapper>
)

