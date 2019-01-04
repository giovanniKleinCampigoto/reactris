import React from 'react';
import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`
const StyledBox = styled.span`
    width: 25px;
    height: 25px;
    margin: 0 5px;
    border: 3px solid white;
`

export const Logo = () => (
    <LogoWrapper>
        <StyledBox/>
        <StyledBox/>
        <StyledBox/>
    </LogoWrapper>
)