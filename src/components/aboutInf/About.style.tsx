import styled, { keyframes } from "styled-components";

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 30px;
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
    transform: scale(125%);
    flex: 0 1 auto;
    padding-top: 1rem;
`
export const ContentItemText =styled.div`
    position: static;
    flex: 0 1 auto;
    flex-basis:30%;
    text-align:left;
    padding:50px;
`
