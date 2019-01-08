import React from 'react';
import styled from 'styled-components'

import Game from '../../../containers/Game/Game'

const Box = styled.div`
    margin: 10px auto;
    border: 3px solid white;
    border-radius: 5px;
    width: 700px;
    height: 83vh;
`

export const TetrisBox = props => (
    <Box>
        <Game/>
    </Box>
)