import React from 'react';
import Headers from './headers';
import Contents from './contents';
import Footers from './footers';
import styled from "styled-components";;

const Container = styled.div`
        display:flex;
        flex-direction: column;
        min-height: 100vh;
        `

function CateClick(){
    return(
        <Container>
            <Headers />
            <Contents />
            <Footers />
        </Container>
    )
}
export default CateClick;
