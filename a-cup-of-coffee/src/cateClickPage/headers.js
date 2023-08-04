import React from 'react';
import styled from "styled-components";

const Header = styled.div`
        flex:1;
        `
const Writebtn = styled.div`
        margin-left:auto;
        border-radius: 15px;
        background-color: lightgray;
        border-radius: 15px;
        `

const WritebtnWrapper = styled.div`
        display:flex;
        height:25px;
        `
function Headers(){
    return(
        <Header>
        <WritebtnWrapper>
            <Writebtn> 
                글 작성하기
            </Writebtn>
        </WritebtnWrapper>
    </Header>

    )

}
export default Headers;