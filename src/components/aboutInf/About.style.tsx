import styled from "styled-components";

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    @media (min-width: 320px) {
        font-size:100%;
    }
    @media (min-width: 768px) {
        font-size:150%;
    }
`

export const Content = styled.div`
    ${TextContent};
    padding-top: 35px;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-rows: 65%; 
    justify-content:center;
    @media (min-width: 300px) {
        grid-template-columns:65%; 
    }
    @media (min-width: 1024px) {
        grid-template-columns:35% 30%; 
    }
`
export const ContentItemMcduck= styled.div`
    position: static;
    transform: scale(125%);
    flex: 0 1 auto;
    padding-top: 1rem;
    @media (min-width: 300px) {
        display:none;
    }
    @media (min-width: 1024px) {
        display:block;
    }
`
export const ContentItemText =styled.div`
    position: static;
    flex: 0 1 auto;
    flex-basis:30%;
    text-align:left;
    padding:50px;
    @media (min-width: 300px) {
        text-align:center   
    }
    @media (min-width: 1024px) {
        text-align:left   
    }
`
