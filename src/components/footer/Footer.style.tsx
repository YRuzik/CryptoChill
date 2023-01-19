import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: 12.5rem;
  bottom: 0;
  background: rgba(51,51,51);
  color: white;
  display: flex;
  align-items: center;
  user-select: none;
`

export const FooterContent = styled.div`
  padding: 0 20rem 0 20rem;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  border-left: 2px solid rgba(255, 255, 255,.25);
  padding: 3rem 0 3rem 0;
  margin-left: 4rem;
  display: block;
  
  div{
    padding-left: 1rem;
  }
`

export const FooterLink = styled(Link)`
  color: white;
  opacity: 0.5;
  text-decoration: none;
  font-weight: bold;
  padding-right: 1rem;
  transition: opacity 0.2s ease-in-out;
  
  &:hover {
    opacity: 1;
  }
`

export const Support = styled.div`
  padding-left: 13rem;
  
  
    ul {
      opacity: 0.5;
      list-style-type: none;
      
      li{
        opacity: 0.45;
        padding: 0.1rem 0 0.1rem 0;
        user-select: text;

        :first-child {
          padding-top: 0.75rem;
        }
      }
    }
`
