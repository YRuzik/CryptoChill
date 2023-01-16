import styled from "styled-components";

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 30px;
`

export const Containter = styled.div`
    display:flex;
    justify-content:center;
`
export const ContainerItem =styled.div`
    ${TextContent}
    flex: 0 1 auto;
    width:35%;
    flex-basis:30%;
    text-align:left;
    padding:25px;
`
export const ContainerItemImg = styled.div`
    flex:0 1 auto;
    padding: 25px 1% 0 5% ;
`