import styled, { keyframes } from "styled-components";

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 2rem;
   
`

const opacity = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const Containter = styled.div`
    display:flex;
    justify-content:center;
    animation: ${opacity} 500ms linear ;
`
export const ContainerItem =styled.div`
    ${TextContent};
    flex: 0 1 auto;
    flex-basis:30%;
    text-align:right;
    padding:1rem 10rem 1rem 1rem;
`
export const ContainerItemImg = styled.div`
    flex:0 1 auto;
    padding: 25px 1% 0 5% ;
    align-items:center;
`
