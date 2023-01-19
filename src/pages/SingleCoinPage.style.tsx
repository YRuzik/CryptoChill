import styled from "styled-components";


export const NameAndTable = styled.div`
  width: 106%;
  padding: 1rem;
  position: relative;
`

export const Name = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const Market = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  text-align: start;
  padding: 0 3.1rem 0 3.1rem;
`

export const Information = styled.div`
  border: 1px solid rgba(0,0,0,.15);
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
  box-shadow: 0px 0px 30px rgba(0,0,0,.15);
`

export const ChangerButton = styled.button`
  margin-left: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 20px;
  padding: 0.2rem 1rem 0.2rem 1rem;
  cursor: pointer;
  background: white;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    background: rgba(0,0,0,.05);
  }
`

export const WrapperAreaChart = styled.div`
  width: 80%;
  height: 30%;
`

export const WrapperChangerButton = styled.div`
  display: flex;
  justify-content: end;
`
