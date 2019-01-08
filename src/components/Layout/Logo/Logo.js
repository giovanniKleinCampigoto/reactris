import React from 'react';
import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    padding: 15px;
    margin-right: 10px;
    cursor: pointer;
`
const StyledBox = styled.span`
    width: 15px;
    height: 15px;
    margin: 0 3px;
    border: 3px solid white;
`

const StyledUpperBox = styled.span`
    position: absolute;
    top: 10px;
    left: 70px;
    width: 15px;
    height: 15px;
    border: 3px solid white;
`

export const Logo = () => (
    <LogoWrapper>
        <StyledUpperBox/>
        <StyledBox/>
        <StyledBox/>
        <StyledBox/>
    </LogoWrapper>
)