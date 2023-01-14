import styled from "styled-components";


export const WrapperDiv = styled.div`
  width: 100%;
  border-radius: 0px;
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
  padding: 0px;
  background: rgb(var(--gray0));
  border-spacing: 0px;
  border-collapse: separate;
  caption-side: top;
  border: 1px solid rgba(0,0,0,.25);
  border-radius: 15px;
`

export const THead = styled.thead`
  font-size: 1rem;
  opacity: 0.4;
`

export const THeadTR = styled.tr`
    
`

export const THeadLabels = styled.th`
  padding: 16px 48px 16px 0px;
  border-bottom: none;
  text-align: left;

  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    padding-right: 32px;
  }
`

export const TBody = styled.tbody`
  padding: 0px;
  border: none;
  transition: opacity 300ms ease 0s;
  transform: translateZ(0px);
`

export const TBodyTR = styled.tr`
  user-select: none;
  
`

export const TBodyTD = styled.td`
  text-align: start;
  display: table-cell;
  vertical-align: inherit;
  padding: 15px 0 15px 0;
  border-top: 1px solid rgba(0,0,0,.25);
  font-size: 1.25rem;
  
  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    width: 70px;
    padding-right: 32px;
  }
`

export const Button = styled.button`
  border: none;
  color: white;
  background: green;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-weight: lighter;
  font-size: 1.5rem;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }
`
