import styled from "styled-components";

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 30px;
`

export const Content = styled.div`
    ${TextContent};
    padding-top: 35px;
    display:flex;
    justify-content: center;
`
export const ContentItemMcduck= styled.div`
    flex: 0 1 auto;
`
export const ContentItemText =styled.div`
    flex: 0 1 auto;
    width:25%;
    flex-basis:30%;
    text-align:left;
    padding:50px;
`