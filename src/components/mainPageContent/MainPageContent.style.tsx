import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 2rem;
  text-align: start;
  justify-content: space-between;
  
  img{
    margin-left: 1rem;
    @media(min-width: 300px)  {
      display:none;
    }
    @media (min-width: 1440px)  {
      display:flex;
    }
  }
`

export const MainText = styled.h1`
  width: 100%;
  font-size: 5rem;
`

export const SubText = styled.h3`
  font-size: 1.5rem;
  opacity: 0.6;
  width: 110%;
`
