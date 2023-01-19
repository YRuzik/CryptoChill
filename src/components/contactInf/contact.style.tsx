import styled, { keyframes } from 'styled-components';

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
`

export const Container = styled.div`
    margin: 2% auto;
    width: 65%;
     display: grid; 
    grid-row-gap:0;
     grid-template-columns: 30% 5% 65%; 
     grid-template-areas: 
    "img none text";
    ${TextContent}
    border: 1px solid rgba(0,0,0,.25);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 25px rgba(0,0,0,.15);
    background-color: white;
`
export const ImagePlace = styled.div`
    grid-area: img;
    
`

export const ContainerText = styled.div`
    display: grid; 
    height: 100%;
    text-align: left;
    grid-template-columns: 93%; 
    grid-template-rows: 15% 65% 20%; 
    grid-area: text; 
    grid-template-areas: 
    "NAME"
    "Description"
    "Social"; 
`
export const Name = styled.div`
    grid-area: NAME;
    font-size:200%;
    @media (min-width: 1680px) {
        font-size: 250%;    
    }
    
`
export const Description = styled.div`
    grid-area: Description;
    font-size:100%;
    @media (min-width: 1680px) {
        font-size: 135%;   
    }
`
export const Social = styled.div`
    grid-area: Social;
`
export const ScocialItem = styled.div`
    img{background-color: gray;
        padding:2.5px;
        margin-left:5px;
        border: 1px solid rgba(0,0,0,.25);
        border-radius: 15px;};
`