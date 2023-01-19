import styled from "styled-components";

export const ToasterWrapper = styled.div`
  min-height: 2.5rem;
  width: 20rem;
  background: rgba(124, 252, 0,.25);
  position: fixed;
  bottom: 1%;
  right: 0.5%;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0,0,0,.20);
  animation: toast-slide-up 0.3s;
  z-index: 99999;
  will-change: transform;
  
  @keyframes toast-slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`

export const ToasterContent = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  height: 100%;
`

export const ToasterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ExitButton = styled.div`
  cursor: pointer;
  user-select: none;
  color: black;
`

export const ToasterBody = styled.div`
  display: flex;
  text-align: start ;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`
