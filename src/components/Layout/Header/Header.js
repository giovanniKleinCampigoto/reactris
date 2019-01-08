import React from 'react';
import styled from 'styled-components'
import { Logo } from '../Logo/Logo'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 25px;
    color: white;
    background-color: #454c59;
    font-size: 2.5em;
    height: 40px;
`

const StyledText = styled.a`
    color: white;
    text-decoration: none;
`

export const Header = props => (
    <StyledHeader>
        <Logo/>
        <StyledText href="">{props.children}</StyledText>
    </StyledHeader>
)