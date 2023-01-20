import styled from 'styled-components';

const TextContent =`
    font-family: 'Quicksand';
    font-style: normal;
    font-size: 120%;
`

export const Container = styled.div`
    margin: 3% auto;
    width: 65%;
  @media (min-width: 300px) {
    padding-bottom: 18%;
  }
    @media (min-width: 1024px) {
      display: grid; 
      grid-row-gap:0;
      grid-template-columns: 30% 70%; 
      grid-template-areas:"img text";
      padding-bottom: 0%;
    };
    ${TextContent}
    border: 1px solid rgba(0,0,0,.25);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 25px rgba(0,0,0,.15);
    background-color: white;
    position: relative;
`
export const ImagePlace = styled.div`
    grid-area: img;
    img{border-radius: 7px};
`
export const ScocialItem = styled.div`
  position: absolute;
  bottom: 3%;
    i{
      background-color: white;
        padding:4px;
        margin-left:5px;
        border: 1px solid rgba(0,0,0,.25);
        border-radius: 15px;
        margin-top:1%;
        color: #333333;
        };
  
  a{
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`
export const ContainerContentFirst = styled.div`
    text-align:start;
    ${TextContent};
    @media (min-width: 320px) {
        padding-left: 0%;
    }
    @media (min-width: 1024px) {
        padding-left: 5%;
    }
`
export const ContainerContentSecond = styled.div`
    text-align:end;
    ${TextContent};
    padding-right: 5%;
`
export const Name= styled.div`
    ${TextContent};
    @media (min-width: 320px) {
        font-size:125%;
    }
    font-size:175%;
`
export const Description = styled.div`
    ${TextContent};
    @media (min-width: 320px) {
        font-size:85%;
    }
    font-size:100%;
`
