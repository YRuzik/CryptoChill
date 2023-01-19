import styled, { keyframes } from 'styled-components';

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 120%;
`

export const Container = styled.div`
    margin: 2% auto;
    width: 65%;
     display: grid; 
    grid-row-gap:0;
     grid-template-columns: 30% 70%; 
     grid-template-areas: 
    "img text";
    ${TextContent}
    border: 1px solid rgba(0,0,0,.25);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 25px rgba(0,0,0,.15);
    background-color: white;
`
export const ImagePlace = styled.div`
    grid-area: img;
    img{border-radius: 7px};
`
export const ScocialItem = styled.div`
    padding-top:7%;
    i{background-color: white;
        padding:4px;
        margin-left:5px;
        border: 1px solid rgba(0,0,0,.25);
        border-radius: 15px;
        margin-top:1%;
        color: #333333;
        };
`
export const ContainerContentFirst = styled.div`
    text-align:start;
    ${TextContent};
    padding-left: 5%;
`
export const ContainerContentSecond = styled.div`
    text-align:end;
    ${TextContent};
    padding-right: 5%;
`
export const Name= styled.div`
    ${TextContent};
    font-size:175%;
`
export const Description = styled.div`
    ${TextContent};
    font-size:100%;
`