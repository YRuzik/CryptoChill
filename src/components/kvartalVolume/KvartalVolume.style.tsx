import styled from "styled-components";


export const KvartalVolumeContainer = styled.div`
  background: #e5a92a;
  width: 100%;
  height: 13rem;
  margin: 1rem 0 4rem 0;
  color: white;
  display: flex;
  justify-content: center;
`

export const KvartalVolumeWrapper = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-items: center;
  padding-bottom: 1rem;
  span{
     h1{
      @media (min-width: 1200px) {
        font-size:4rem;
      }
      @media (min-width: 300px) {
        font-size: 3rem;
      }
    }
  }
`
