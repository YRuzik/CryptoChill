import styled, { keyframes } from "styled-components";

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 30px;
`
const opacity = keyframes`
    from{
        transform: translateY(75%);
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const Content = styled.div`
    ${TextContent};
    padding-top: 35px;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns:35% 30%; 
    grid-template-rows: 65%; 
    justify-content:center;
`
export const ContentItemMcduck= styled.div`
    position: static;
    flex: 0 1 auto;
`
export const ContentItemText =styled.div`
    position: static;
    flex: 0 1 auto;
    flex-basis:30%;
    text-align:left;
    padding:50px;
    animation: ${opacity} 1s ease-in-out;
`