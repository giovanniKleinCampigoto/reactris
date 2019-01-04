import React from 'react';
import styled from 'styled-components'
import { Logo } from '../Logo/Logo'

const StyledHeader = styled.header`
    display: flex;
    padding: 15px 40px;
    color: white;
    background-color: #454c59;
    font-size: 2.5em;
`

export const Header = props => (
    <StyledHeader>
        <Logo/>
        {props.children}
    </StyledHeader>
)